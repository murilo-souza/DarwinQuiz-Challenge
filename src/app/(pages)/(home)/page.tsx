// import { QuizOptions } from '@/components/quiz/quiz-options'
import Access from '../../../../public/access.png'
import Image from 'next/image'
import { AnswerOptions } from '@/components/answer/answer-options'

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
      <div className="flex gap-6 items-center mb-[85px]">
        <Image src={Access} alt="Quiz Logo" />
        <span className="text-white text-[28px]">Accessibility</span>
      </div>

      <div className="grid grid-cols-2">
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
  )
}
