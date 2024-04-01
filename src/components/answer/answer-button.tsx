import { HTMLAttributes } from 'react'

interface AnswerButtonProps extends HTMLAttributes<HTMLButtonElement> {
  title: string
}

export function AnswerButton({ title, ...rest }: AnswerButtonProps) {
  return (
    <button
      {...rest}
      className="flex items-center gap-8 bg-navy p-5 rounded-lg"
    >
      <div className="bg-lightGray h-14 w-14 rounded-lg flex items-center justify-center">
        <p className="text-[28px] text-grayNavy">A</p>
      </div>
      <h2 className="text-[28px] text-white">{title}</h2>
    </button>
  )
}
