import { db } from "@/app/database"
import { NextResponse ,NextRequest } from "next/server"

interface RouteProps{
    params:{
        quizId:string
    }
}

export const GET = async(req:NextRequest, props :RouteProps)=>{
    const quiz = await db.getQuizById(parseInt(props.params.quizId))

if(!quiz){
    return NextResponse.json({error:"quiz not found"}, {status: 404})
}

    return NextResponse.json({data: quiz})
}