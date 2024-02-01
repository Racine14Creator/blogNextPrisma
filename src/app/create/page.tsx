"use client"
import FormPost from "@/components/FormPost"
import { SubmitHandler } from "react-hook-form"
import { FormInputPost } from "../types"
import BackButton from "@/components/BackButton"

const CreatePage = () => {
    const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {

    };
    return (
        <div>
            <BackButton />
            <h1 className="text-2xl my-4 font-bold text-center">Add new post</h1>
            <FormPost isEditing={false} submit={handleCreatePost} />
        </div>
    )
}

export default CreatePage