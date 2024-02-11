import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

    try {
        const body = req.json();

        console.log({ "data": body });

        const post = await db.post.create({
            data: {
                title: body.title,
                content: body.content,
                tagId: body.tagId,
            }
        })
        return NextResponse.json(post, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Could not create a Post" }, { status: 500 })
    }
}