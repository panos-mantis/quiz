import { db } from "@/app/database"
import { QuizComponent } from "./components/Quiz"

interface PagePros {
    params: {
        quizId:string
    }
}

const Page = async (props: PagePros) =>{
    const quizId = parseInt(props.params.quizId)
    const quiz = await db.getQuizById(quizId)

    return(
    <>
      {quiz&&<QuizComponent  quiz={quiz}></QuizComponent>}  
    </>
    )
}

export default Page