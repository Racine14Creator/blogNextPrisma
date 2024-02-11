"use client"

import { FormInputPost } from "@/app/types";
import { Tag } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Pencil, UserPlus } from "lucide-react";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormPostProps {
    submit: SubmitHandler<FormInputPost>;
    isEditing: boolean;
}

const FormPost: FC<FormPostProps> = ({ submit, isEditing }) => {
    const { register, handleSubmit } = useForm<FormInputPost>(),
        { data: dataTags, isLoading: isLoadingTags } = useQuery<Tag[]>({
            queryKey: ['tags'],
            queryFn: async () => {
                const res = await axios.get('/api/tags')
                return res.data
            }
        })
    // console.log(dataTags)
    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-col items-center justify-center gap-5 mt-10">
            <input
                {...register("title", { required: true })}
                type="text"
                placeholder="Enter the title..." className="input w-full max-w-lg border border-spacing-1 border-white" />
            <textarea
                {...register("content", { required: true })}
                className="textarea w-full max-w-lg border border-spacing-1 border-white" placeholder="Enter content..."></textarea>
            {isLoadingTags ? (
                <span className="loading loading-ring loading-md"></span>
            ) : (
                <select
                    {...register("tagId", { required: true })}
                    className="select select-bordered w-full max-w-lg border border-spacing-1 border-white"
                    defaultValue={''}>
                    <option disabled value={''}>Select Tag</option>
                    {dataTags?.map(item => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                </select>
            )}
            <button className={`btn ${isEditing ? 'btn-error' : 'btn-primary'} w-full max-w-lg`}>
                {isEditing ? (
                    <><Pencil /> Update</>
                ) : (<><UserPlus /> Create</>)}
            </button>
        </form>
    )
}

export default FormPost