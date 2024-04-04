'use client'

import he from 'he'
import React, { useState, useEffect } from 'react'
import { Questions } from '../../lib/definitions'
import Results from '../results/results'
import QuestionsComponent from '../questions/questions-component'

export default function Trivia({ data }: { data: Questions[] }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [questionsToAnswer, setQuestionsToAnswer] = useState<Questions[]>([])
  const [userAnswers, setUserAnswers] = useState<string[]>([])

  const NUM_QUESTIONS = 10

  useEffect(() => {
    if (data.length > 0) {
      const decodedStaticData = data.map((question) => ({
        ...question,
        question: he.decode(question.question),
      }))
      const shuffledQuestions = decodedStaticData
        .sort(() => Math.random() - 0.5)
        .slice(0, NUM_QUESTIONS)
      setQuestionsToAnswer(shuffledQuestions)
    }
  }, [data])

  const currentQuestion = questionsToAnswer[currentQuestionIndex]

  const handleAnswer = (answer: string) => {
    setUserAnswers((prevAnswers) => [...prevAnswers, answer])
    if (currentQuestionIndex < NUM_QUESTIONS - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
    } else {
      setShowResults(true)
    }
  }

  return (
    <div className="w-full flex items-center justify-center">
      {showResults ? (
        <Results
          questions={questionsToAnswer}
          userAnswers={userAnswers}
          totalCorrect={
            userAnswers.filter(
              (answer, index) =>
                answer === questionsToAnswer[index].correct_answer
            ).length
          }
          totalQuestions={NUM_QUESTIONS}
        />
      ) : (
        <QuestionsComponent
          question={currentQuestion}
          index={currentQuestionIndex}
          totalQuestions={NUM_QUESTIONS}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  )
}
