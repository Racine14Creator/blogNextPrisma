// import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    await NextResponse.json({ Message: "Data" })
}