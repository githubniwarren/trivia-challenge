import { Questions } from '../../lib/definitions'
import Button from '../button'
import { Check, X } from 'lucide-react'

export default function QuestionsComponent({
  question,
  index,
  totalQuestions,
  handleAnswer,
}: {
  question: Questions
  index: number
  totalQuestions: number
  handleAnswer: (answer: string) => void
}) {
  return (
    <div className="w-full flex flex-col justify-center items-center md:w-[500px] h-[250px] md:h-[400px] border-primary border p-5 rounded-md">
      <div className="flex items-center justify-between w-full pb-2">
        <p className="text-primary text-md sm:text-lg font-bold">
          {question?.category}
        </p>
        <p className="text-primary text-sm font-semibold whitespace-nowrap">
          {index + 1} of {totalQuestions}
        </p>
      </div>
      <div className="w-full flex flex-grow items-center justify-center border-b border-primary border-t">
        <p className="text-primary text-xl sm:text-2xl font- tracking-tighter text-center">
          {question?.question}
        </p>
      </div>
      <div className="flex gap-10 pt-4 text-sm">
        <Button
          className="flex items-center space-x-2 bg-green-500 shadow-green-500/20 lg:hover:shadow-green-500/40"
          onClick={() => handleAnswer('True')}
        >
          <Check className="w-5 h-5" />
          <span className="text-sm">True</span>
        </Button>
        <Button
          className="flex items-center  space-x-2 bg-red-500 shadow-red-500/20 lg:hover:shadow-red-500/40"
          onClick={() => handleAnswer('False')}
        >
          <X className="w-5 h-5" />
          <span className="text-sm">False</span>
        </Button>
      </div>
    </div>
  )
}
