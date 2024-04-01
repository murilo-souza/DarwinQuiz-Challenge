import { QuizOptions } from '@/components/quiz-options'

export default function Home() {
  return (
    <div className="grid grid-cols-2 pt-56">
      <div className="flex flex-col gap-12">
        <h1 className="text-white text-[64px] leading-none">
          Welcome to the <span className="font-bold">Frontend Quiz!</span>
        </h1>
        <span className="text-lightBluish italic text-xl">
          Pick a subject to get started.
        </span>
      </div>
      <QuizOptions />
    </div>
  )
}
