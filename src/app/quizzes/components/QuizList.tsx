"use client"

import { Add } from "@mui/icons-material"
import { Button, Stack, Typography } from "@mui/material"

import { QuizListRow } from "./QuizListRow"
import { Quiz } from "@prisma/client"


export const QuizList = (props:{quizzes: Quiz[]} ) =>{
    return(
    <>
        <Typography  variant="h3">Quizzes</Typography>
        <Stack spacing={1} sx={{
            width:600,
            padding:1,
            marginTop:1,
        }}>{props.quizzes.map(quiz=>{
            return<QuizListRow   key={quiz.id} quiz= {quiz}/>
        })}
            
        </Stack> 
    </>
    )
}