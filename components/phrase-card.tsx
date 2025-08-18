"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Volume2, RotateCcw, Mic } from "lucide-react"

interface PhraseCardProps {
  chinese: string
  pinyin: string
  english: string
  audio?: string
}

export function PhraseCard({ chinese, pinyin, english, audio }: PhraseCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const playAudio = (e: React.MouseEvent) => {
    e.stopPropagation()

    if ("speechSynthesis" in window) {
      setIsPlaying(true)
      const utterance = new SpeechSynthesisUtterance(chinese)
      utterance.lang = "zh-CN"
      utterance.rate = 0.8
      utterance.onend = () => setIsPlaying(false)
      utterance.onerror = () => setIsPlaying(false)

      speechSynthesis.speak(utterance)
    } else {
      console.log("Playing audio for:", chinese)
      // Fallback for browsers without speech synthesis
      setIsPlaying(true)
      setTimeout(() => setIsPlaying(false), 2000)
    }
  }

  const startPronunciationPractice = (e: React.MouseEvent) => {
    e.stopPropagation()
    // This would open a pronunciation practice modal or navigate to practice page
    console.log("Starting pronunciation practice for:", chinese)
  }

  return (
    <Card className="cursor-pointer transition-all hover:shadow-md" onClick={() => setIsFlipped(!isFlipped)}>
      <CardContent className="p-6">
        {!isFlipped ? (
          <div className="text-center space-y-3">
            <div className="text-2xl font-bold text-primary">{chinese}</div>
            <div className="text-lg text-muted-foreground">{pinyin}</div>
            <div className="flex gap-2 justify-center">
              <Button variant="ghost" size="sm" onClick={playAudio} disabled={isPlaying} className="mt-2">
                <Volume2 className="h-4 w-4 mr-2" />
                {isPlaying ? "Playing..." : "Listen"}
              </Button>
              <Button variant="ghost" size="sm" onClick={startPronunciationPractice} className="mt-2">
                <Mic className="h-4 w-4 mr-2" />
                Practice
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-3">
            <div className="text-xl font-semibold">{english}</div>
            <div className="text-sm text-muted-foreground">Tap to flip back</div>
            <Button variant="ghost" size="sm" onClick={(e) => e.stopPropagation()}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Flip
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
