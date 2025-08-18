"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Mic, Volume2, Play, Square, RotateCcw } from "lucide-react"

interface PronunciationPracticeProps {
  phrase: {
    chinese: string
    pinyin: string
    english: string
  }
}

export function PronunciationPractice({ phrase }: PronunciationPracticeProps) {
  const [isRecording, setIsRecording] = useState(false)
  const [hasRecording, setHasRecording] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [feedback, setFeedback] = useState<string | null>(null)
  const [recognizedText, setRecognizedText] = useState<string>("")
  const [accuracy, setAccuracy] = useState<number | null>(null)

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const recognitionRef = useRef<any>(null)
  const audioChunksRef = useRef<Blob[]>([])

  useEffect(() => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition
      recognitionRef.current = new SpeechRecognition()
      recognitionRef.current.lang = "zh-CN"
      recognitionRef.current.continuous = false
      recognitionRef.current.interimResults = false

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        setRecognizedText(transcript)

        // Simple accuracy calculation based on character matching
        const similarity = calculateSimilarity(phrase.chinese, transcript)
        setAccuracy(similarity)

        if (similarity > 80) {
          setFeedback("Excellent pronunciation! 很好!")
        } else if (similarity > 60) {
          setFeedback("Good effort! Try to pronounce it more clearly.")
        } else {
          setFeedback("Keep practicing! Listen to the original again.")
        }
      }

      recognitionRef.current.onerror = () => {
        setFeedback("Speech recognition error. Please try again.")
      }
    }
  }, [phrase.chinese])

  const calculateSimilarity = (original: string, recognized: string): number => {
    if (!recognized) return 0

    // Remove spaces and normalize
    const orig = original.replace(/\s/g, "")
    const recog = recognized.replace(/\s/g, "")

    if (orig === recog) return 100

    // Calculate character overlap
    let matches = 0
    const minLength = Math.min(orig.length, recog.length)

    for (let i = 0; i < minLength; i++) {
      if (orig[i] === recog[i]) matches++
    }

    return Math.round((matches / orig.length) * 100)
  }

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      audioChunksRef.current = []

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data)
      }

      mediaRecorder.onstop = () => {
        setHasRecording(true)
        stream.getTracks().forEach((track) => track.stop())
      }

      mediaRecorder.start()
      setIsRecording(true)
      setFeedback(null)
      setRecognizedText("")
      setAccuracy(null)

      // Start speech recognition
      if (recognitionRef.current) {
        recognitionRef.current.start()
      }
    } catch (error) {
      console.error("Error accessing microphone:", error)
      setFeedback("Unable to access microphone. Please check your permissions.")
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
    }

    if (recognitionRef.current) {
      recognitionRef.current.stop()
    }
  }

  const playOriginal = () => {
    if ("speechSynthesis" in window) {
      setIsPlaying(true)
      const utterance = new SpeechSynthesisUtterance(phrase.chinese)
      utterance.lang = "zh-CN"
      utterance.rate = 0.7
      utterance.onend = () => setIsPlaying(false)
      utterance.onerror = () => setIsPlaying(false)

      speechSynthesis.speak(utterance)
    } else {
      setIsPlaying(true)
      setTimeout(() => setIsPlaying(false), 2000)
      console.log("Playing original audio for:", phrase.chinese)
    }
  }

  const playRecording = () => {
    if (hasRecording && audioChunksRef.current.length > 0) {
      const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" })
      const audioUrl = URL.createObjectURL(audioBlob)
      const audio = new Audio(audioUrl)
      audio.play()
      setFeedback("Playing your recording...")
    }
  }

  const resetPractice = () => {
    setHasRecording(false)
    setFeedback(null)
    setRecognizedText("")
    setAccuracy(null)
    audioChunksRef.current = []
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mic className="h-5 w-5" />
          Pronunciation Practice
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Target Phrase */}
        <div className="text-center space-y-2">
          <div className="text-3xl font-bold text-primary">{phrase.chinese}</div>
          <div className="text-lg text-muted-foreground">{phrase.pinyin}</div>
          <div className="text-sm text-muted-foreground italic">{phrase.english}</div>
        </div>

        {/* Audio Controls */}
        <div className="flex gap-3">
          <Button variant="outline" onClick={playOriginal} disabled={isPlaying} className="flex-1 bg-transparent">
            <Volume2 className="h-4 w-4 mr-2" />
            {isPlaying ? "Playing..." : "Listen to Original"}
          </Button>
        </div>

        {/* Recording Controls */}
        <div className="space-y-3">
          <div className="flex gap-3">
            {!isRecording ? (
              <Button onClick={startRecording} className="flex-1" variant={hasRecording ? "outline" : "default"}>
                <Mic className="h-4 w-4 mr-2" />
                {hasRecording ? "Record Again" : "Start Recording"}
              </Button>
            ) : (
              <Button onClick={stopRecording} variant="destructive" className="flex-1">
                <Square className="h-4 w-4 mr-2" />
                Stop Recording
              </Button>
            )}

            {hasRecording && (
              <Button variant="outline" onClick={playRecording} className="flex-1 bg-transparent">
                <Play className="h-4 w-4 mr-2" />
                Play My Recording
              </Button>
            )}

            {hasRecording && (
              <Button variant="ghost" onClick={resetPractice} size="sm">
                <RotateCcw className="h-4 w-4" />
              </Button>
            )}
          </div>

          {isRecording && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Recording... Speak now!</span>
              </div>
              <Progress value={undefined} className="w-full" />
            </div>
          )}
        </div>

        {/* Recognition Results */}
        {recognizedText && (
          <div className="space-y-3">
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-sm font-medium mb-2">What I heard:</div>
              <div className="text-lg">{recognizedText}</div>
            </div>

            {accuracy !== null && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Pronunciation Accuracy</span>
                  <span className="font-medium">{accuracy}%</span>
                </div>
                <Progress value={accuracy} className="w-full" />
              </div>
            )}
          </div>
        )}

        {/* Feedback */}
        {feedback && (
          <div
            className={`p-4 rounded-lg ${
              accuracy && accuracy > 80
                ? "bg-green-50 border border-green-200"
                : accuracy && accuracy > 60
                  ? "bg-yellow-50 border border-yellow-200"
                  : "bg-muted"
            }`}
          >
            <p className="text-sm">{feedback}</p>
          </div>
        )}

        {/* Instructions */}
        <div className="text-xs text-muted-foreground text-center">
          Click "Listen to Original" first, then record yourself saying the phrase. The app will analyze your
          pronunciation and provide feedback!
        </div>
      </CardContent>
    </Card>
  )
}
