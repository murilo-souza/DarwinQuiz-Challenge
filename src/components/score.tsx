import { Button } from './button'
import { QuizLogo } from './quiz-logo'

interface ScoreProps {
  score: number
  imgUrl: string
  title: string
  onClick: () => void
}

export function Score({ score, imgUrl, title, onClick }: ScoreProps) {
  return (
    <div className="lg:pt-[97px] pt-4 px-6">
      <QuizLogo imgUrl={imgUrl} title={title} />

      <div className="grid lg:grid-cols-2 grid-cols-1 lg:mt-[85px] mt-12">
        <div className="flex flex-col gap-12 mb-10 lg:mb-0">
          <h1 className="text-white lg:text-[64px] text-[40px] leading-none lg:max-w-[465px] max-w-[300px]">
            Quiz completed <span className="font-bold">Your scored...</span>
          </h1>
        </div>
        <div className="flex flex-col gap-8">
          <div className="bg-navy flex flex-col items-center p-12 rounded-3xl">
            <QuizLogo title={title} imgUrl={imgUrl} />
            <h2 className="text-white lg:text-[144px] text-[88px]">{score}</h2>
            <span className="text-lightBluish lg:text-2xl text-lg">
              out of 10
            </span>
          </div>
          <Button title="Play Again" onClick={onClick} />
        </div>
      </div>
    </div>
  )
}
