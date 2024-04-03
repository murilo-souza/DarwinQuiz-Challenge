import { HTMLAttributes } from 'react'
import { QuizLogo } from './quiz-logo'

// Propriedades do botão de selecionar o quiz
interface QuizButtonProps extends HTMLAttributes<HTMLButtonElement> {
  imgUrl: string
  title: string
}

export function QuizButton({ imgUrl, title, ...rest }: QuizButtonProps) {
  return (
    <button
      {...rest}
      className="flex items-center gap-8 bg-navy lg:p-5 p-3 lg:rounded-3xl rounded-md"
    >
      <QuizLogo title={title} imgUrl={imgUrl} />
    </button>
  )
}
