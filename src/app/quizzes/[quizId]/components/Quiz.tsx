"use client"


import {
  Card,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material"
import { Answer, Question, Quiz } from "@prisma/client"
import { useState } from "react"

type QuestionsWithRelations = Question&{
  answers: Answer[]
}


type QuizWithRelations= Quiz&{
  questions:QuestionsWithRelations[]
}


export const QuizComponent = ({ quiz }: { quiz: QuizWithRelations }) => {
  return (
    <Stack spacing={2}>
      <Typography variant="h4">{quiz.title}</Typography>
      <Typography>{quiz.description}</Typography>
      <Stack spacing={2}>
        {quiz.questions.map((question) => (<QuestionComponent key={question.id} question={question} /> ))}
      </Stack>
    </Stack>
  )
}

const QuestionComponent = ({ question }: { question: QuestionsWithRelations }) => {
  const [value, setValue] = useState<number | undefined>()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt((event.target as HTMLInputElement).value))}

    return (
      <Card elevation={3} sx={{ width: 400 }}>
        <CardHeader title={question.text} />
        <CardContent>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              Answers
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              {question.answers.map((answer) => (
                <>
                  <FormControlLabel
                    key={answer.id}
                    value={answer.id}
                    control={<Radio />}
                    label={answer.text}
                  />
                </>
              ))}
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    )
  
}
