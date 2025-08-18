"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Download, Wifi, WifiOff, Trash2 } from "lucide-react"
import Link from "next/link"

interface OfflinePhrase {
  id: string
  chinese: string
  pinyin: string
  english: string
  category: string
  savedAt: Date
}

const essentialPhrases: OfflinePhrase[] = [
  {
    id: "1",
    chinese: "你好",
    pinyin: "Nǐ hǎo",
    english: "Hello",
    category: "Basic",
    savedAt: new Date(),
  },
  {
    id: "2",
    chinese: "谢谢",
    pinyin: "Xiè xiè",
    english: "Thank you",
    category: "Basic",
    savedAt: new Date(),
  },
  {
    id: "3",
    chinese: "多少钱？",
    pinyin: "Duōshǎo qián?",
    english: "How much?",
    category: "Shopping",
    savedAt: new Date(),
  },
  {
    id: "4",
    chinese: "我要去...",
    pinyin: "Wǒ yào qù...",
    english: "I want to go to...",
    category: "Taxi",
    savedAt: new Date(),
  },
  {
    id: "5",
    chinese: "救命",
    pinyin: "Jiù mìng",
    english: "Help!",
    category: "Emergency",
    savedAt: new Date(),
  },
]

export default function OfflinePage() {
  const [savedPhrases, setSavedPhrases] = useState<OfflinePhrase[]>([])
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    // Load saved phrases from localStorage
    const saved = localStorage.getItem("tripmandarin-offline-phrases")
    if (saved) {
      setSavedPhrases(JSON.parse(saved))
    } else {
      // Initialize with essential phrases
      setSavedPhrases(essentialPhrases)
      localStorage.setItem("tripmandarin-offline-phrases", JSON.stringify(essentialPhrases))
    }

    // Monitor online status
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)
    setIsOnline(navigator.onLine)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  const savePhrasesOffline = () => {
    localStorage.setItem("tripmandarin-offline-phrases", JSON.stringify(savedPhrases))
    alert("Phrases saved for offline access!")
  }

  const clearOfflineData = () => {
    localStorage.removeItem("tripmandarin-offline-phrases")
    setSavedPhrases([])
    alert("Offline data cleared!")
  }

  const addEssentialPhrases = () => {
    const newPhrases = [
      ...savedPhrases,
      ...essentialPhrases.filter((ep) => !savedPhrases.find((sp) => sp.id === ep.id)),
    ]
    setSavedPhrases(newPhrases)
    localStorage.setItem("tripmandarin-offline-phrases", JSON.stringify(newPhrases))
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/tools">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Tools
                </Link>
              </Button>
              <div>
                <h1 className="text-2xl font-bold flex items-center gap-2">
                  {isOnline ? (
                    <Wifi className="h-6 w-6 text-green-600" />
                  ) : (
                    <WifiOff className="h-6 w-6 text-red-600" />
                  )}
                  Offline Access
                </h1>
                <p className="text-muted-foreground">
                  Status: {isOnline ? "Online" : "Offline"} • {savedPhrases.length} phrases saved
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={clearOfflineData} size="sm">
                <Trash2 className="h-4 w-4 mr-2" />
                Clear Data
              </Button>
              <Button onClick={savePhrasesOffline} size="sm">
                <Download className="h-4 w-4 mr-2" />
                Save Offline
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* Status Card */}
          <Card className={isOnline ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {isOnline ? (
                    <Wifi className="h-5 w-5 text-green-600" />
                  ) : (
                    <WifiOff className="h-5 w-5 text-red-600" />
                  )}
                  <div>
                    <div className="font-semibold">{isOnline ? "Connected to Internet" : "Offline Mode Active"}</div>
                    <div className="text-sm text-muted-foreground">
                      {isOnline
                        ? "You can access all features and save new phrases"
                        : "Using saved phrases - some features may be limited"}
                    </div>
                  </div>
                </div>
                {savedPhrases.length < 10 && (
                  <Button onClick={addEssentialPhrases} size="sm" variant="outline">
                    Add Essential Phrases
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Saved Phrases */}
          <Card>
            <CardHeader>
              <CardTitle>Offline Phrases ({savedPhrases.length}/10)</CardTitle>
              <p className="text-sm text-muted-foreground">
                These phrases are saved locally and available without internet connection
              </p>
            </CardHeader>
            <CardContent>
              {savedPhrases.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <WifiOff className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No phrases saved for offline access</p>
                  <Button onClick={addEssentialPhrases} className="mt-4">
                    Add Essential Phrases
                  </Button>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-4">
                  {savedPhrases.map((phrase) => (
                    <div key={phrase.id} className="p-4 border rounded-lg space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-primary">{phrase.chinese}</div>
                        <div className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                          {phrase.category}
                        </div>
                      </div>
                      <div className="text-muted-foreground">{phrase.pinyin}</div>
                      <div className="text-sm">{phrase.english}</div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Instructions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">How Offline Mode Works</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                  1
                </div>
                <div>
                  <div className="font-medium">Save Phrases</div>
                  <div className="text-muted-foreground">
                    Select up to 10 essential phrases to save locally on your device
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                  2
                </div>
                <div>
                  <div className="font-medium">Access Offline</div>
                  <div className="text-muted-foreground">
                    When you lose internet connection, you can still access your saved phrases
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                  3
                </div>
                <div>
                  <div className="font-medium">Sync When Online</div>
                  <div className="text-muted-foreground">
                    When you reconnect, you can update your saved phrases and access all features
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
