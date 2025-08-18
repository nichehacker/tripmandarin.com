"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Mic, Volume2, CheckCircle, XCircle } from "lucide-react"

export default function TryPhraseNow() {
  const [input, setInput] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [feedback, setFeedback] = useState<{
    score: number
    message: string
    type: "success" | "warning" | "error"
  } | null>(null)

  const samplePhrases = [
    { chinese: "你好", pinyin: "nǐ hǎo", english: "Hello" },
    { chinese: "谢谢", pinyin: "xiè xiè", english: "Thank you" },
    { chinese: "多少钱", pinyin: "duō shǎo qián", english: "How much?" },
  ]

  const handleAnalyze = () => {
    if (!input.trim()) return

    // Simulate AI feedback
    const randomScore = Math.floor(Math.random() * 40) + 60 // 60-100
    let type: "success" | "warning" | "error" = "success"
    let message = "Great pronunciation!"

    if (randomScore < 70) {
      type = "warning"
      message = "Good effort! Try emphasizing the tones more."
    } else if (randomScore < 80) {
      type = "warning"
      message = "Nice work! Focus on the 'zh' sound."
    }

    setFeedback({ score: randomScore, message, type })
  }

  const handleListen = () => {
    setIsListening(true)
    // Simulate speech recognition
    setTimeout(() => {
      setInput("你好")
      setIsListening(false)
    }, 2000)
  }

  const playAudio = (text: string) => {
    // Simulate text-to-speech
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = "zh-CN"
      speechSynthesis.speak(utterance)
    }
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Try 1 Phrase Now!</CardTitle>
        <p className="text-muted-foreground">
          Type or speak a Chinese phrase and get instant AI feedback on your pronunciation
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Sample Phrases */}
        <div>
          <h4 className="font-medium mb-3">Try these common phrases:</h4>
          <div className="grid gap-2">
            {samplePhrases.map((phrase, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <span className="font-medium text-lg">{phrase.chinese}</span>
                  <span className="text-muted-foreground ml-2">({phrase.pinyin})</span>
                  <span className="text-sm text-muted-foreground block">{phrase.english}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setInput(phrase.chinese)
                    playAudio(phrase.chinese)
                  }}
                >
                  <Volume2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Input Section */}
        <div className="space-y-3">
          <div className="flex gap-2">
            <Input
              placeholder="Type a Chinese phrase here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="text-lg"
            />
            <Button variant="outline" onClick={handleListen} disabled={isListening} className="px-3 bg-transparent">
              <Mic className={`h-4 w-4 ${isListening ? "text-red-500" : ""}`} />
            </Button>
          </div>

          <Button onClick={handleAnalyze} disabled={!input.trim()} className="w-full">
            Get AI Pronunciation Feedback
          </Button>
        </div>

        {/* Feedback */}
        {feedback && (
          <Card
            className={`border-2 ${
              feedback.type === "success"
                ? "border-green-200 bg-green-50"
                : feedback.type === "warning"
                  ? "border-yellow-200 bg-yellow-50"
                  : "border-red-200 bg-red-50"
            }`}
          >
            <CardContent className="pt-4">
              <div className="flex items-center gap-3">
                {feedback.type === "success" ? (
                  <CheckCircle className="h-6 w-6 text-green-600" />
                ) : (
                  <XCircle className="h-6 w-6 text-yellow-600" />
                )}
                <div>
                  <div className="font-medium">Score: {feedback.score}/100</div>
                  <div className="text-sm text-muted-foreground">{feedback.message}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* CTA */}
        <div className="text-center pt-4 border-t">
          <p className="text-sm text-muted-foreground mb-3">Want to learn more Chinese for travelers?</p>
          <Button asChild>
            <a href="/courses">Start Full Course</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
