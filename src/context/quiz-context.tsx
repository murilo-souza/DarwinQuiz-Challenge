'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

interface QuizContextData {
  selectedQuiz: number | null
  setSelectedQuiz: (value: number | null) => void
}

const QuizContext = createContext({} as QuizContextData)

export function QuizContextProvider({ children }: { children: ReactNode }) {
  const [selectedQuiz, setSelectedQuiz] = useState<number | null>(null)

  return (
    <QuizContext.Provider
      value={{
        selectedQuiz,
        setSelectedQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}

export const useQuiz = () => useContext(QuizContext)
