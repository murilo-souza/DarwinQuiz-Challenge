// import { QuizOptions } from '@/components/quiz/quiz-options'

import { AnswerOptions } from '@/components/answer/answer-options'
import { Button } from '@/components/button'
import { QuizLogo } from '@/components/quiz-logo'

export default function Home() {
  return (
    // <div className="grid grid-cols-2 pt-56">
    //   <div className="flex flex-col gap-12">
    //     <h1 className="text-white text-[64px] leading-none">
    //       Welcome to the <span className="font-bold">Frontend Quiz!</span>
    //     </h1>
    //     <span className="text-lightBluish italic text-xl">
    //       Pick a subject to get started.
    //     </span>
    //   </div>
    //   <QuizOptions />
    // </div>

    <div className="pt-[97px]">
      <QuizLogo title="Accessibility" />

      <div className="grid grid-cols-2  mt-[85px]">
        <div className="flex flex-col gap-12">
          <span className="text-lightBluish italic text-xl">
            Question 6 of 10
          </span>

          <p className="text-white text-4xl leading-none max-w-[465px]">
            Which of these color contrast ratios defines the minimum WCAG 2.1
            Level AA requirement for normal text?
          </p>

          <div className="h-2 rounded-full bg-navy max-w-[465px] mt-[180px]">
            <div className="h-2 w-1/12 rounded-full bg-primary" />
          </div>
        </div>
        <AnswerOptions />
      </div>
    </div>

    // <div className="pt-[97px]">
    //   <QuizLogo title="Accessibility" />

    //   <div className="grid grid-cols-2  mt-[85px]">
    //     <div className="flex flex-col gap-12">
    //       <h1 className="text-white text-[64px] leading-none max-w-[465px]">
    //         Quiz completed <span className="font-bold">You scored...</span>
    //       </h1>
    //     </div>
    //     <div className="flex flex-col gap-8">
    //       <div className="bg-navy flex flex-col items-center p-12 rounded-3xl">
    //         <QuizLogo title="Accessibility" />
    //         <h2 className="text-white text-[144px]">8</h2>
    //         <span className="text-lightBluish text-2xl">out of 10</span>
    //       </div>
    //       <Button title="Play Again" />
    //     </div>
    //   </div>
    // </div>
  )
}
