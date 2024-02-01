"use client"

import { FormInputPost } from "@/app/types"
import { FC } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

interface FormPostProps {
    submit: SubmitHandler<FormInputPost>
}

const FormPost: FC<FormPostProps> = ({ submit }) => {
    const { register, handleSubmit } = useForm<FormInputPost>()

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-col items-center justify-center gap-5 mt-10">
            <input
                {...register("title", { required: true })}
                type="text"
                placeholder="Enter the title..." className="input w-full max-w-lg border" />
            <textarea
                {...register("content", { required: true })}
                className="textarea w-full max-w-lg" placeholder="Enter content..."></textarea>
            <select
                {...register("tag", { required: true })}
                className="select select-bordered w-full max-w-lg"
                defaultValue={''}>
                <option disabled value={''}>Select Tag</option>
                <option>Python</option>
                <option>Php</option>
                <option>Javascript</option>
                <option>TypeScript</option>
            </select>
            <button className="btn btn-primary w-full max-w-lg">Create</button>
        </form>
    )
}

export default FormPost