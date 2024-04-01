import { Button } from '../button'
import { AnswerButton } from './answer-button'

export function AnswerOptions() {
  return (
    <div className="flex flex-col gap-6">
      <AnswerButton title="4.5:1" />
      <AnswerButton title="4.5:1" />
      <AnswerButton title="4.5:1" />
      <AnswerButton title="4.5:1" />
      <Button title="Submit Answer" />
    </div>
  )
}
