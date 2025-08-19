'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { ArrowLeft, CheckCircle, XCircle, RotateCcw } from 'lucide-react'
import Link from 'next/link'

interface QuizQuestion {
  id: number
  question: string
  chinese: string
  options: string[]
  correct: number
  explanation: string
}

interface QuizResult {
  questionId: number
  question: string
  chinese: string
  selectedAnswer: number
  correctAnswer: number
  isCorrect: boolean
  options: string[]
  explanation: string
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What does '多少钱？' mean?",
    chinese: '多少钱？',
    options: ['How much?', 'Where is it?', 'Thank you', 'Excuse me'],
    correct: 0,
    explanation:
      "多少钱 (duōshǎo qián) literally means 'how much money' and is used to ask about prices."
  },
  {
    id: 2,
    question: "How do you say 'I want to go to...' in Chinese?",
    chinese: '我要去...',
    options: ['我想要...', '我要去...', '我喜欢...', '我需要...'],
    correct: 1,
    explanation:
      "我要去 (wǒ yào qù) means 'I want to go to' and is essential for giving directions to taxi drivers."
  },
  {
    id: 3,
    question: "What does '不要辣' mean in a restaurant?",
    chinese: '不要辣',
    options: ['Very spicy', 'No spicy', 'More spicy', 'A little spicy'],
    correct: 1,
    explanation:
      "不要辣 (bù yào là) means 'no spicy' - very useful for travelers who can't handle spicy food!"
  },
  {
    id: 4,
    question: 'How do you ask for the check at a restaurant?',
    chinese: '买单',
    options: ['菜单', '买单', '谢谢', '再见'],
    correct: 1,
    explanation: "买单 (mǎi dān) means 'pay the bill' or 'check please' in restaurants."
  },
  {
    id: 5,
    question: "What does '我有预订' mean at a hotel?",
    chinese: '我有预订',
    options: ['I need help', 'I have a reservation', 'I want to check out', 'Where is my room?'],
    correct: 1,
    explanation:
      "我有预订 (wǒ yǒu yùdìng) means 'I have a reservation' - essential for hotel check-ins."
  }
]

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [quizResults, setQuizResults] = useState<QuizResult[]>([])
  const [showResultsModal, setShowResultsModal] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return
    setSelectedAnswer(answerIndex)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return

    const newAnswers = [...answers, selectedAnswer]
    setAnswers(newAnswers)

    const currentResult: QuizResult = {
      questionId: quizQuestions[currentQuestion].id,
      question: quizQuestions[currentQuestion].question,
      chinese: quizQuestions[currentQuestion].chinese,
      selectedAnswer: selectedAnswer,
      correctAnswer: quizQuestions[currentQuestion].correct,
      isCorrect: selectedAnswer === quizQuestions[currentQuestion].correct,
      options: quizQuestions[currentQuestion].options,
      explanation: quizQuestions[currentQuestion].explanation
    }
    const newResults = [...quizResults, currentResult]
    setQuizResults(newResults)

    if (selectedAnswer === quizQuestions[currentQuestion].correct) {
      setScore(score + 1)
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setShowResultsModal(true)
    }
  }

  const handleShowAnswer = () => {
    setShowResult(true)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnswers([])
    setQuizResults([])
    setShowResultsModal(false)
  }

  const currentQ = quizQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <div className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        <div className="space-y-6">
          <Progress value={progress} className="w-full" />

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">{currentQ.question}</CardTitle>
              {/*
              <div className="text-3xl font-bold text-primary text-center py-4">
                {currentQ.chinese}
              </div>
              */}
            </CardHeader>
            <CardContent className="space-y-3">
              {currentQ.options.map((option, index) => (
                <Button
                  key={index}
                  variant={
                    selectedAnswer === index
                      ? showResult
                        ? index === currentQ.correct
                          ? 'default'
                          : 'destructive'
                        : 'secondary'
                      : showResult && index === currentQ.correct
                      ? 'default'
                      : 'outline'
                  }
                  className="w-full justify-start text-left h-auto p-4"
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                >
                  <div className="flex items-center gap-3">
                    {showResult && (
                      <>
                        {index === currentQ.correct ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : selectedAnswer === index ? (
                          <XCircle className="h-5 w-5 text-red-600" />
                        ) : null}
                      </>
                    )}
                    <span>{option}</span>
                  </div>
                </Button>
              ))}

              {showResult && (
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">{currentQ.explanation}</p>
                </div>
              )}

              <div className="flex gap-3 pt-4">
                {!showResult ? (
                  <>
                    <Button
                      onClick={handleShowAnswer}
                      variant="outline"
                      className="flex-1 bg-transparent"
                    >
                      Show Answer
                    </Button>
                    <Button
                      onClick={handleNextQuestion}
                      disabled={selectedAnswer === null}
                      className="flex-1"
                    >
                      {selectedAnswer !== null ? 'Next Question' : 'Select an Answer'}
                    </Button>
                  </>
                ) : (
                  <Button onClick={handleNextQuestion} className="w-full">
                    {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Dialog open={showResultsModal} onOpenChange={setShowResultsModal}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">Quiz Complete!</DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="text-center space-y-4">
              <div className="text-6xl font-bold text-primary">
                {score}/{quizQuestions.length}
              </div>
              <div className="text-lg">
                {score === quizQuestions.length
                  ? "Perfect! You're ready for China! 🎉"
                  : score >= quizQuestions.length * 0.8
                  ? 'Great job! You know your travel Chinese well!'
                  : score >= quizQuestions.length * 0.6
                  ? "Good effort! A bit more practice and you'll be ready!"
                  : 'Keep practicing! Review the course materials and try again.'}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Detailed Results</h3>
              {quizResults.map((result, index) => (
                <div key={result.questionId} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Question {index + 1}</h4>
                    {result.isCorrect ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm">{result.question}</p>
                    <p className="text-xl font-bold text-primary">{result.chinese}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">Your answer:</span>
                      <span
                        className={`text-sm ${
                          result.isCorrect ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {result.options[result.selectedAnswer]}
                      </span>
                    </div>

                    {!result.isCorrect && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">Correct answer:</span>
                        <span className="text-sm text-green-600">
                          {result.options[result.correctAnswer]}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="bg-muted rounded p-3">
                    <p className="text-sm text-muted-foreground">{result.explanation}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 justify-center pt-4">
              <Button onClick={resetQuiz}>
                <RotateCcw className="h-4 w-4 mr-2" />
                Try Again
              </Button>
              <Button variant="outline" asChild>
                <Link href="/courses">Go to Courses</Link>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
