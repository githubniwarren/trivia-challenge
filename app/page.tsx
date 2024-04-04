import Link from 'next/link'

export default async function Home() {
  return (
    <main className="w-full min-h-[500px] flex flex-col items-center justify-center text-center">
      <div className="md:px-4 max-w-[1500px] mx-auto w-[90%]">
        <div className="space-y-2 pb-5">
          <h1 className="flex flex-col text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-8xl/none text-primary">
            Trivia Challenge
          </h1>
          <p className="text-secondary text-sm font-semibold tracking-tighter sm:text-lg italic">
            You will be presented with 10 True or False questions.
          </p>
          <p className="text-primary text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl/none">
            Can you score 10/10?
          </p>
        </div>
        <div className="mt-6">
          <Link
            href={'/trivia'}
            className="text-red lg:hover:before:bg-primary rounded-md relative h-[50px] p-3 w-40 overflow-hidden border border-primary bg-white px-3 text-primary shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-primary before:transition-all before:duration-500 lg:hover:text-white lg:hover:shadow-primary lg:hover:before:left-0 lg:hover:before:w-full"
          >
            <span className="relative z-10">Let&apos;s start!</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
