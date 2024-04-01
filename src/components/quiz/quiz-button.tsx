import Image from 'next/image'
import { HTMLAttributes } from 'react'

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
      <Image src={imgUrl} alt="quiz image" />
      <h2 className="text-[28px] text-white">{title}</h2>
    </button>
  )
}
