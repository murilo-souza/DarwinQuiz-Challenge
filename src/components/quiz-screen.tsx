'use client'

import { QuizLogo } from './quiz-logo'
import { Button } from './button'
import { AnswerButton } from './answer-button'
import { useQuiz } from '@/context/quiz-context'
import { QuizProps, QuizSelection } from './quiz-selection'
import { useState } from 'react'
import Image from 'next/image'
import Wrong from '../../public/wrong.svg'
import { Score } from './score'

interface QuizSelectionProps {
  quizData: QuizProps
}

export function QuizScreen({ quizData }: QuizSelectionProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [answer, setAnswer] = useState('')
  const { selectedQuiz, setSelectedQuiz } = useQuiz()
  const [answerSubmitted, setAnswerSubmitted] = useState(false)
  const [showEmptyMessage, setShowEmptyMessage] = useState(false)

  function handleNextQuestion() {
    if (selectedQuiz !== null) {
      if (
        currentQuestion + 1 <
        quizData.quizzes[selectedQuiz].questions.length
      ) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        setShowResult(true)
      }

      setAnswer('')
      setAnswerSubmitted(false)
      setShowEmptyMessage(false)
    }
  }

  function handleSubmitAnswer() {
    if (answer === '') {
      setShowEmptyMessage(true)
      return
    }

    if (selectedQuiz !== null) {
      if (
        answer ===
        quizData.quizzes[selectedQuiz].questions[currentQuestion].answer
      ) {
        setScore(score + 1)
        setAnswerSubmitted(true)
      } else {
        setAnswerSubmitted(true)
      }
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
      <Score
        score={score}
        imgUrl={quizData.quizzes[selectedQuiz].icon}
        title={quizData.quizzes[selectedQuiz].title}
        onClick={handleResetQuiz}
      />
    )
  }

  return (
    <div className="lg:pt-[97px] pt-4 px-6">
      <QuizLogo
        title={quizData.quizzes[selectedQuiz].title}
        imgUrl={quizData.quizzes[selectedQuiz].icon}
      />

      <div className="grid lg:grid-cols-2 grid-cols-1 lg:mt-[85px] mt-12">
        <div className="flex flex-col gap-12">
          <span className="text-lightBluish italic lg:text-xl text-[14px]">
            Question {currentQuestion + 1} of 10
          </span>

          <p className="text-white lg:text-4xl text-xl leading-none lg:max-w-[465px]">
            {quizData.quizzes[selectedQuiz].questions[currentQuestion].question}
          </p>

          <div className="h-2 rounded-full bg-navy max-w-[465px] lg:mt-[180px] mt-6 lg:mb-0 mb-10">
            <div
              className="h-2 rounded-full bg-primary"
              style={{
                width: `${(currentQuestion + 1) * 10}%`,
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
              isCorrect={
                answer ===
                quizData.quizzes[selectedQuiz].questions[currentQuestion].answer
              }
              isAnswered={answerSubmitted}
              showCorrect={
                option ===
                quizData.quizzes[selectedQuiz].questions[currentQuestion].answer
              }
            />
          ))}

          {answerSubmitted ? (
            <Button title="Next Question" onClick={handleNextQuestion} />
          ) : (
            <Button title="Submit Answer" onClick={handleSubmitAnswer} />
          )}

          {showEmptyMessage && (
            <div className="flex items-center justify-center gap-3">
              <Image
                src={Wrong}
                alt=""
                className="w-6 h-6 lg:w-[30px] lg:h-[30px]"
              />
              <p className="text-lightGray lg:text-2xl text-lg">
                Please select an answer
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
