"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Volume2, RotateCcw, CheckCircle, XCircle } from "lucide-react"

interface FlashcardData {
  chinese: string
  pinyin: string
  english: string
  audio?: string
}

interface FlashcardPracticeProps {
  cards: FlashcardData[]
  title: string
}

export function FlashcardPractice({ cards, title }: FlashcardPracticeProps) {
  const [currentCard, setCurrentCard] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [knownCards, setKnownCards] = useState<boolean[]>(new Array(cards.length).fill(false))
  const [showingResults, setShowingResults] = useState(false)

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const handleKnown = (known: boolean) => {
    const newKnownCards = [...knownCards]
    newKnownCards[currentCard] = known
    setKnownCards(newKnownCards)

    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1)
      setIsFlipped(false)
    } else {
      setShowingResults(true)
    }
  }

  const resetPractice = () => {
    setCurrentCard(0)
    setIsFlipped(false)
    setKnownCards(new Array(cards.length).fill(false))
    setShowingResults(false)
  }

  const playAudio = () => {
    console.log("Playing audio for:", cards[currentCard].chinese)
  }

  const knownCount = knownCards.filter(Boolean).length
  const progress = ((currentCard + 1) / cards.length) * 100

  if (showingResults) {
    return (
      <Card>
        <CardContent className="p-8 text-center space-y-6">
          <h3 className="text-2xl font-bold">Flashcard Practice Complete!</h3>
          <div className="text-4xl font-bold text-primary">
            {knownCount}/{cards.length}
          </div>
          <p className="text-muted-foreground">
            {knownCount === cards.length
              ? "Perfect! You know all the phrases!"
              : `You knew ${knownCount} out of ${cards.length} phrases. Keep practicing!`}
          </p>
          <Button onClick={resetPractice}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Practice Again
          </Button>
        </CardContent>
      </Card>
    )
  }

  const card = cards[currentCard]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="text-sm text-muted-foreground">
          {currentCard + 1} / {cards.length}
        </div>
      </div>

      <Progress value={progress} className="w-full" />

      <Card className="cursor-pointer min-h-[300px]" onClick={handleCardFlip}>
        <CardContent className="p-8 flex flex-col items-center justify-center text-center space-y-4">
          {!isFlipped ? (
            <>
              <div className="text-4xl font-bold text-primary mb-4">{card.chinese}</div>
              <div className="text-xl text-muted-foreground">{card.pinyin}</div>
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation()
                  playAudio()
                }}
              >
                <Volume2 className="h-4 w-4 mr-2" />
                Listen
              </Button>
              <p className="text-sm text-muted-foreground mt-4">Tap to see translation</p>
            </>
          ) : (
            <>
              <div className="text-2xl font-semibold mb-4">{card.english}</div>
              <div className="text-lg text-muted-foreground">{card.pinyin}</div>
              <div className="text-lg text-primary">{card.chinese}</div>
              <p className="text-sm text-muted-foreground mt-4">Did you know this phrase?</p>
            </>
          )}
        </CardContent>
      </Card>

      {isFlipped && (
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1 bg-transparent" onClick={() => handleKnown(false)}>
            <XCircle className="h-4 w-4 mr-2" />
            Need Practice
          </Button>
          <Button className="flex-1" onClick={() => handleKnown(true)}>
            <CheckCircle className="h-4 w-4 mr-2" />I Know This
          </Button>
        </div>
      )}
    </div>
  )
}
