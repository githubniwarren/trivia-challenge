import { promises as fs } from 'fs'
import { Suspense } from 'react'
import { QuestionSkeleton } from '../ui/skeleton'
import Trivia from '../ui/trivia/trivia'

export default async function Page() {
  const file = await fs.readFile(process.cwd() + '/app/questions.json', 'utf8')
  const data = JSON.parse(file)

  return (
    <main className="flex min-h-[500px] p-5 flex-col items-center justify-center">
      <Suspense fallback={<QuestionSkeleton />}>
        <Trivia data={data.results} />
      </Suspense>
    </main>
  )
}
