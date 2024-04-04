export function QuestionSkeleton() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full flex flex-col justify-center items-center max-w-[1500px] md:w-[70%] h-[250px] md:h-[400px]">
        <div className="flex items-center justify-between w-full">
          <p className="bg-gray-100"></p>
          <p className="bg-gray-100 "></p>
        </div>
        <div className="flex items-center justify-center p-5 flex-grow">
          <p className="bg-gray-100"></p>
        </div>
      </div>
      <div className="flex mt-auto gap-10">
        <div className="bg-gray-100 rounded-md"></div>
        <div className="bg-gray-100 rounded-md"></div>
      </div>
    </div>
  )
}
