import { QuizSelection } from '@/components/quiz-selection'

// Carregando os dados vindo da API
async function getQuizzes() {
  const response = await fetch('http://localhost:3333/quizzes', {
    cache: 'no-store',
  })

  const quizzes = await response.json()

  return quizzes
}

export default async function Home() {
  const quizData = await getQuizzes()

  return <QuizSelection quizData={quizData} />
}
