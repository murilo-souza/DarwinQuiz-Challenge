import Image from 'next/image'
import { HTMLAttributes } from 'react'
import Correct from '../../public/correct.svg'
import Wrong from '../../public/wrong.svg'

interface AnswerButtonProps extends HTMLAttributes<HTMLButtonElement> {
  title: string
  letter: string
  isSelected: boolean
  isCorrect: boolean
  isAnswered: boolean
  showCorrect: boolean
}

export function AnswerButton({
  title,
  letter,
  isSelected,
  isCorrect,
  isAnswered,
  showCorrect,
  ...rest
}: AnswerButtonProps) {
  let buttonClass = ''

  if (isAnswered) {
    if (isCorrect && isSelected) {
      buttonClass += 'ring-[3px] ring-correct text-white'
    } else if (!isCorrect && isSelected) {
      buttonClass += 'ring-[3px] ring-wrong text-white'
    }
  }

  let textClass = ''

  if (isAnswered) {
    if (isCorrect && isSelected) {
      textClass += 'text-white'
    } else if (!isCorrect && isSelected) {
      textClass += 'text-white'
    }
  }

  let brickClass = ''

  if (isAnswered) {
    if (isCorrect && isSelected) {
      brickClass += 'bg-correct'
    } else if (!isCorrect && isSelected) {
      brickClass += 'bg-wrong'
    }
  }

  return (
    <button
      {...rest}
      className={`${buttonClass} flex items-center justify-between bg-navy lg:p-5 p-3 lg:rounded-3xl rounded-xl group ${isSelected ? 'ring-[3px] ring-primary' : ''}`}
      disabled={isAnswered}
    >
      <div className="flex gap-8 items-center">
        <div
          className={`${brickClass}  ${isSelected ? 'bg-primary' : 'bg-lightGray group-hover:bg-lightViolet'} lg:min-h-14 lg:min-w-14 min-w-10 min-h-10 rounded-lg flex items-center justify-center`}
        >
          <p
            className={`${textClass} lg:text-[28px] text-lg  ${isSelected ? 'text-white' : 'text-grayNavy enabled:group-hover:text-primary'}`}
          >
            {letter}
          </p>
        </div>
        <h2 className="lg:text-[28px] text-lg text-white">{title}</h2>
      </div>

      {isAnswered && showCorrect && (
        <Image
          src={Correct}
          alt=""
          className="w-6 h-6 lg:w-[30px] lg:h-[30px]"
        />
      )}
      {isAnswered && isSelected && !showCorrect && (
        <Image src={Wrong} alt="" className="w-6 h-6 lg:w-[30px] lg:h-[30px]" />
      )}
    </button>
  )
}
