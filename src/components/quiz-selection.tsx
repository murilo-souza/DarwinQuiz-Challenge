'use client'

import { useQuiz } from '@/context/quiz-context'
import { QuizButton } from './quiz-button'
import { QuizScreen } from './quiz-screen'

export interface QuizProps {
  quizzes: {
    title: string
    icon: string
    questions: {
      question: string
      options: string[]
      answer: string
    }[]
  }[]
}

interface QuizSelectionProps {
  quizData: QuizProps
}

export function QuizSelection({ quizData }: QuizSelectionProps) {
  const { selectedQuiz, setSelectedQuiz } = useQuiz()

  if (selectedQuiz !== null) {
    return <QuizScreen quizData={quizData} />
  }

  return (
    <div className="grid lg:grid-cols-2 lg:pt-56 grid-cols-1 pt-36 px-6">
      <div className="flex flex-col gap-12">
        <h1 className="text-white lg:text-[64px] text-[40px] leading-none">
          Welcome to the <span className="font-bold">Frontend Quiz!</span>
        </h1>
        <span className="text-lightBluish italic lg:text-xl text-[14px] md:mb-0 mb-16">
          Pick a subject to get started.
        </span>
      </div>
      <div className="flex flex-col gap-6">
        {quizData.quizzes.map((quiz, i) => (
          <QuizButton
            key={quiz.title}
            title={quiz.title}
            imgUrl={quiz.icon}
            onClick={() => setSelectedQuiz(i)}
          />
        ))}
      </div>
    </div>
  )
}
