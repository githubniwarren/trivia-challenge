import { Check, X } from 'lucide-react'
import { Questions } from '@/app/lib/definitions'
import Link from 'next/link'

export default function Results({
  questions,
  userAnswers,
  totalCorrect,
  totalQuestions,
}: {
  questions: Questions[]
  userAnswers: string[]
  totalCorrect: number
  totalQuestions: number
}) {
  const renderResultIcon = (index: number) => {
    const isCorrect = userAnswers[index] === questions[index].correct_answer
    return isCorrect ? (
      <Check className="text-green-500 w-7 h-7" />
    ) : (
      <X className="text-red-500 w-7 h-7" />
    )
  }

  const renderAnswerFeedback = (question: Questions, index: number) => {
    const isCorrect = userAnswers[index] === question.correct_answer
    const answerClass = isCorrect ? 'text-green-500' : 'text-red-500'
    return (
      <p className="text-sm py-1 font-semibold italic text-secondary">
        The correct answer is{' '}
        <span className={`px-1 ${answerClass}`}>
          {question.correct_answer}.
        </span>
        You answered{' '}
        <span className={`px-1 ${answerClass}`}>{userAnswers[index]}.</span>
      </p>
    )
  }

  return (
    <div className="w-full md:w-[700px] flex flex-col justify-center items-center">
      <div className="border-primary border p-5 rounded-md">
        <div className="flex flex-col items-center justify-center py-3">
          <p className="text-primary text-4xl/none font-semibold pb-5">
            Final Results
          </p>
          <p className="text-primary text-5xl font-semibold">
            {totalCorrect}/{totalQuestions}
          </p>
          <p className="text-primary text-md sm:text-xl font-semibold">Score</p>
        </div>
        <ul>
          {questions.map((question, index) => (
            <li key={question.question} className="py-2">
              <div className="flex flex-row items-center">
                <p className="border border-primary rounded-md mr-5">
                  {renderResultIcon(index)}
                </p>
                <div className="">
                  <p className="text-sm text-primary font-semibold sm:text-md">
                    {question.question}
                  </p>
                  {renderAnswerFeedback(question, index)}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex items-center justify-center">
          <Link
            href="/"
            passHref
            className="text-red text-center lg:hover:before:bg-redborder-red-500 rounded-md relative h-[50px] p-3 w-40 overflow-hidden border border-primary bg-white px-3 text-primary shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-primary before:transition-all before:duration-500 lg:hover:text-white lg:hover:shadow-primary lg:hover:before:left-0 lg:hover:before:w-full"
          >
            <span className="relative z-10">Play Again</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
