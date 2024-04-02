'use client'

import { QuizLogo } from './quiz-logo'
import { Button } from './button'
import { AnswerButton } from './answer-button'
import { useQuiz } from '@/context/quiz-context'
import { QuizProps, QuizSelection } from './quiz-selection'
import { useState } from 'react'

interface QuizSelectionProps {
  quizData: QuizProps
}

export function QuizScreen({ quizData }: QuizSelectionProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [answer, setAnswer] = useState('')
  const { selectedQuiz, setSelectedQuiz } = useQuiz()

  function handleNextQuestion() {
    if (selectedQuiz !== null) {
      if (
        answer ===
        quizData.quizzes[selectedQuiz].questions[currentQuestion].answer
      ) {
        setScore(score + 1)
      }

      if (
        currentQuestion + 1 <
        quizData.quizzes[selectedQuiz].questions.length
      ) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        setShowResult(true)
      }

      setAnswer('')
    }
  }

  function handleResetQuiz() {
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
    setSelectedQuiz(null)
  }

  if (selectedQuiz === null) {
    return <QuizSelection quizData={quizData} />
  }

  if (showResult) {
    return (
      <div className="pt-[97px]">
        <QuizLogo
          imgUrl={quizData.quizzes[selectedQuiz].icon}
          title={quizData.quizzes[selectedQuiz].title}
        />

        <div className="grid grid-cols-2  mt-[85px]">
          <div className="flex flex-col gap-12">
            <h1 className="text-white text-[64px] leading-none max-w-[465px]">
              Quiz completed <span className="font-bold">Your scored...</span>
            </h1>
          </div>
          <div className="flex flex-col gap-8">
            <div className="bg-navy flex flex-col items-center p-12 rounded-3xl">
              <QuizLogo
                title={quizData.quizzes[selectedQuiz].title}
                imgUrl={quizData.quizzes[selectedQuiz].icon}
              />
              <h2 className="text-white text-[144px]">{score}</h2>
              <span className="text-lightBluish text-2xl">out of 10</span>
            </div>
            <Button title="Play Again" onClick={handleResetQuiz} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-[97px]">
      <QuizLogo
        title={quizData.quizzes[selectedQuiz].title}
        imgUrl={quizData.quizzes[selectedQuiz].icon}
      />

      <div className="grid grid-cols-2  mt-[85px]">
        <div className="flex flex-col gap-12">
          <span className="text-lightBluish italic text-xl">
            Question {currentQuestion + 1} of 10
          </span>

          <p className="text-white text-4xl leading-none max-w-[465px]">
            {quizData.quizzes[selectedQuiz].questions[currentQuestion].question}
          </p>

          <div className="h-2 rounded-full bg-navy max-w-[465px] mt-[180px]">
            <div
              className="h-2 rounded-full bg-primary"
              style={{
                width: `${((currentQuestion + 1) / quizData.quizzes[selectedQuiz].questions.length) * 100}%`,
              }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {quizData.quizzes[selectedQuiz].questions[
            currentQuestion
          ].options.map((option: string, i) => (
            <AnswerButton
              key={option}
              title={option}
              letter={String.fromCharCode(65 + i)}
              onClick={() => setAnswer(option)}
              isSelected={answer === option}
            />
          ))}

          <Button title="Submit Answer" onClick={handleNextQuestion} />
        </div>
      </div>
    </div>
  )
}