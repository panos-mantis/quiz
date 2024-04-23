import { NextResponse } from "next/server"
import { prisma } from "../../../../../prisma/client"
import { quizzes } from "@/app/database/mock"

export const GET= async()=>{
    /* await prisma.answer.createMany({
        data:[
            {text:"Athens",isCorrect:true, questionId:1},
            {text:"Patra",isCorrect:false, questionId:1},
            {text:"Thessaloniki",isCorrect:false, questionId:1},
        ]
    }) */
  /*   const question= await prisma.question.findUnique({where:{id:1},include:{quiz:true}}) */
    const quizzes = await prisma.quiz.findUnique({where:{id:2}, include:{questions:{include:{answers:true}}}})
   /*  const questions = await prisma.question.findMany() */


    return NextResponse.json({quizzes} )
}