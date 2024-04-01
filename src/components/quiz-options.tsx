import { QuizButton } from './quiz-button'
import Access from '../../public/access.png'
import CSS from '../../public/css.png'
import HTML from '../../public/html.png'
import JS from '../../public/js.png'

export function QuizOptions() {
  return (
    <div className="flex flex-col gap-6">
      <QuizButton imgUrl={HTML} title="Accessibility" />
      <QuizButton imgUrl={CSS} title="Accessibility" />
      <QuizButton imgUrl={JS} title="Accessibility" />
      <QuizButton imgUrl={Access} title="Accessibility" />
    </div>
  )
}
