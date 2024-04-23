import { db } from "@/app/database"
import { NextResponse } from "next/server"


export const GET = async()=>{
    const quizzes = await db.getQuizzes()

    return NextResponse.json({data: quizzes})
}