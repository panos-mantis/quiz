import { prisma } from "../../../prisma/client"
import { quizzes } from "./mock"

export const  db={
    getQuizzes: async()=>{
        const quizzes =await prisma.quiz.findMany({orderBy:{title:"asc"}})
        return Promise.resolve(quizzes)
    },
    getQuizById: async (id:number)=>{
        const quiz = await prisma.quiz.findUnique({where:{id:id},include:{questions:{include:{answers:true}}}})

        return Promise.resolve(quiz)
    }
}