
import { Box, Card, CardContent, CardHeader, Link as MuiLink, Typography } from "@mui/material"
import { Quiz } from "@prisma/client"
import Link from "next/link"

export const QuizListRow= ({quiz} :{quiz :Quiz})=>{
    return(
        <Card elevation={0} sx={{border: "1px solid #ccc"}}>
            <CardHeader title={quiz.title}></CardHeader>
            <CardContent>
                <Typography>
                {quiz.description}
                </Typography>
                <MuiLink component={Link} href={`/quizzes/${quiz.id}`}>Take the quiz</MuiLink>
            </CardContent>

        </Card>
    )
}