import { HTMLAttributes } from 'react'
import { QuizLogo } from './quiz-logo'

interface QuizButtonProps extends HTMLAttributes<HTMLButtonElement> {
  imgUrl: string
  title: string
}

export function QuizButton({ imgUrl, title, ...rest }: QuizButtonProps) {
  return (
    <button
      {...rest}
      className="flex items-center gap-8 bg-navy p-5 rounded-lg"
    >
      <QuizLogo title={title} imgUrl={imgUrl} />
    </button>
  )
}
