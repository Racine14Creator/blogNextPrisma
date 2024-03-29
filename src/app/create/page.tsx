"use client"
import FormPost from "@/components/FormPost"
import { SubmitHandler } from "react-hook-form"
import { FormInputPost } from "../types"
import BackButton from "@/components/BackButton"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "next/navigation"

const CreatePage = () => {
    const router = useRouter()

    const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
        createPost(data)
    };
    const { mutate: createPost, isLoading: isLoadingSubmit } = useMutation({
        mutationFn: (newPost: FormInputPost) => {
            return axios.post('/api/posts/create', newPost)
        },
        onError: (error) => {
            console.log(error);
        },
        onSuccess: () => {
            router.push('/');
            router.refresh()
        }
    })
    return (
        <div>
            <BackButton />
            <h1 className="text-2xl my-4 font-bold text-center">Add new post</h1>
            <FormPost isLoadingSubmit={isLoadingSubmit} isEditing={false} submit={handleCreatePost} />
        </div>
    )
}

export default CreatePage