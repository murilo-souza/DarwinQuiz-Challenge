import { HTMLAttributes } from 'react'

interface AnswerButtonProps extends HTMLAttributes<HTMLButtonElement> {
  title: string
  letter: string
  isSelected: boolean
}

export function AnswerButton({
  title,
  letter,
  isSelected,
  ...rest
}: AnswerButtonProps) {
  return (
    <button
      {...rest}
      className={`flex items-center gap-8 bg-navy p-5 rounded-3xl group ${isSelected ? 'ring-[3px] ring-primary' : ''}`}
    >
      <div
        className={` ${isSelected ? 'bg-primary' : 'bg-lightGray group-hover:bg-lightViolet'} h-14 w-14 rounded-lg flex items-center justify-center`}
      >
        <p
          className={`text-[28px]  ${isSelected ? 'text-white' : 'text-grayNavy group-hover:text-primary'} `}
        >
          {letter}
        </p>
      </div>
      <h2 className="text-[28px] text-white">{title}</h2>
    </button>
  )
}
