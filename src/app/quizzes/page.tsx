
import { db } from "../database"
import { QuizList } from "./components/QuizList"

const Page = async() =>{
    const quizzes = await db.getQuizzes()
    console.log(quizzes)
    return<><QuizList quizzes={quizzes}></QuizList></>
}

export default Page