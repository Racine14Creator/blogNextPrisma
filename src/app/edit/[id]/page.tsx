"use client"

import { FormInputPost } from "@/app/types";
import BackButton from "@/components/BackButton";
import FormPost from "@/components/FormPost"
import { SubmitHandler } from "react-hook-form";

const EditPostPage = () => {
    const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
        console.log(data)
    };
    return (
        <div>
            <BackButton />
            <h1 className="text-2xl my-4 font-bold text-center">Edit post</h1>
            <FormPost
                submit={handleEditPost}
                isEditing={true}
            />
        </div>
    )
}

export default EditPostPage