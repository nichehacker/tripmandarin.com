"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Volume2, Play, Pause } from "lucide-react"

interface DialogueLine {
  speaker: string
  chinese: string
  pinyin: string
  english: string
}

interface DialogueSectionProps {
  title: string
  dialogue: DialogueLine[]
}

export function DialogueSection({ title, dialogue }: DialogueSectionProps) {
  const [isPlayingAll, setIsPlayingAll] = useState(false)
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null)

  const playDialogue = async () => {
    if (!("speechSynthesis" in window)) {
      console.log("Playing dialogue:", title)
      return
    }

    setIsPlayingAll(true)

    for (let i = 0; i < dialogue.length; i++) {
      setCurrentlyPlaying(i)

      await new Promise<void>((resolve) => {
        const utterance = new SpeechSynthesisUtterance(dialogue[i].chinese)
        utterance.lang = "zh-CN"
        utterance.rate = 0.7
        utterance.onend = () => resolve()
        utterance.onerror = () => resolve()

        speechSynthesis.speak(utterance)
      })

      // Pause between speakers
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }

    setIsPlayingAll(false)
    setCurrentlyPlaying(null)
  }

  const stopDialogue = () => {
    speechSynthesis.cancel()
    setIsPlayingAll(false)
    setCurrentlyPlaying(null)
  }

  const playLine = (line: DialogueLine, index: number) => {
    if ("speechSynthesis" in window) {
      setCurrentlyPlaying(index)
      const utterance = new SpeechSynthesisUtterance(line.chinese)
      utterance.lang = "zh-CN"
      utterance.rate = 0.8
      utterance.onend = () => setCurrentlyPlaying(null)
      utterance.onerror = () => setCurrentlyPlaying(null)

      speechSynthesis.speak(utterance)
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Button variant="outline" size="sm" onClick={isPlayingAll ? stopDialogue : playDialogue}>
            {isPlayingAll ? (
              <>
                <Pause className="h-4 w-4 mr-2" />
                Stop
              </>
            ) : (
              <>
                <Volume2 className="h-4 w-4 mr-2" />
                Play All
              </>
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {dialogue.map((line, index) => (
          <div
            key={index}
            className={`border-l-4 border-primary/20 pl-4 transition-all ${
              currentlyPlaying === index ? "bg-primary/5 border-primary" : ""
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="font-semibold text-sm text-primary">{line.speaker}</div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => playLine(line, index)}
                disabled={currentlyPlaying === index}
              >
                <Play className="h-3 w-3" />
              </Button>
            </div>
            <div className="text-lg font-medium">{line.chinese}</div>
            <div className="text-muted-foreground">{line.pinyin}</div>
            <div className="text-sm text-muted-foreground italic">{line.english}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
