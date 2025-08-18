"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Download, FileText } from "lucide-react"
import Link from "next/link"

interface Phrase {
  id: string
  chinese: string
  pinyin: string
  english: string
  category: string
}

const allPhrases: Phrase[] = [
  // Taxi
  { id: "taxi-1", chinese: "你好", pinyin: "Nǐ hǎo", english: "Hello", category: "Taxi" },
  { id: "taxi-2", chinese: "我要去...", pinyin: "Wǒ yào qù...", english: "I want to go to...", category: "Taxi" },
  { id: "taxi-3", chinese: "多少钱？", pinyin: "Duōshǎo qián?", english: "How much?", category: "Taxi" },
  { id: "taxi-4", chinese: "停车", pinyin: "Tíng chē", english: "Stop the car", category: "Taxi" },
  { id: "taxi-5", chinese: "谢谢", pinyin: "Xiè xiè", english: "Thank you", category: "Taxi" },

  // Restaurant
  { id: "rest-1", chinese: "菜单", pinyin: "Càidān", english: "Menu", category: "Restaurant" },
  { id: "rest-2", chinese: "我想要...", pinyin: "Wǒ xiǎng yào...", english: "I would like...", category: "Restaurant" },
  { id: "rest-3", chinese: "不要辣", pinyin: "Bù yào là", english: "No spicy", category: "Restaurant" },
  { id: "rest-4", chinese: "买单", pinyin: "Mǎi dān", english: "Check, please", category: "Restaurant" },
  { id: "rest-5", chinese: "我吃素", pinyin: "Wǒ chī sù", english: "I'm vegetarian", category: "Restaurant" },

  // Hotel
  { id: "hotel-1", chinese: "我有预订", pinyin: "Wǒ yǒu yùdìng", english: "I have a reservation", category: "Hotel" },
  { id: "hotel-2", chinese: "房间号码", pinyin: "Fángjiān hàomǎ", english: "Room number", category: "Hotel" },
  { id: "hotel-3", chinese: "WiFi密码", pinyin: "WiFi mìmǎ", english: "WiFi password", category: "Hotel" },
  { id: "hotel-4", chinese: "退房", pinyin: "Tuì fáng", english: "Check-out", category: "Hotel" },

  // Shopping
  {
    id: "shop-1",
    chinese: "这个多少钱？",
    pinyin: "Zhège duōshǎo qián?",
    english: "How much is this?",
    category: "Shopping",
  },
  { id: "shop-2", chinese: "太贵了", pinyin: "Tài guì le", english: "Too expensive", category: "Shopping" },
  {
    id: "shop-3",
    chinese: "可以便宜点吗？",
    pinyin: "Kěyǐ piányí diǎn ma?",
    english: "Can you make it cheaper?",
    category: "Shopping",
  },

  // Emergency
  { id: "emerg-1", chinese: "救命", pinyin: "Jiù mìng", english: "Help!", category: "Emergency" },
  { id: "emerg-2", chinese: "我需要帮助", pinyin: "Wǒ xūyào bāngzhù", english: "I need help", category: "Emergency" },
  {
    id: "emerg-3",
    chinese: "医院在哪里？",
    pinyin: "Yīyuàn zài nǎlǐ?",
    english: "Where is the hospital?",
    category: "Emergency",
  },
]

export default function PhrasebookPage() {
  const [selectedPhrases, setSelectedPhrases] = useState<Set<string>>(new Set())
  const [isGenerating, setIsGenerating] = useState(false)

  const handlePhraseToggle = (phraseId: string) => {
    const newSelected = new Set(selectedPhrases)
    if (newSelected.has(phraseId)) {
      newSelected.delete(phraseId)
    } else {
      newSelected.add(phraseId)
    }
    setSelectedPhrases(newSelected)
  }

  const handleSelectAll = (category: string) => {
    const categoryPhrases = allPhrases.filter((p) => p.category === category)
    const newSelected = new Set(selectedPhrases)
    const allCategorySelected = categoryPhrases.every((p) => newSelected.has(p.id))

    if (allCategorySelected) {
      categoryPhrases.forEach((p) => newSelected.delete(p.id))
    } else {
      categoryPhrases.forEach((p) => newSelected.add(p.id))
    }
    setSelectedPhrases(newSelected)
  }

  const generatePhrasebook = () => {
    setIsGenerating(true)
    // Simulate PDF generation
    setTimeout(() => {
      setIsGenerating(false)
      // In a real app, this would generate and download a PDF
      alert(`Generated phrasebook with ${selectedPhrases.size} phrases! In a real app, this would download a PDF.`)
    }, 2000)
  }

  const categories = [...new Set(allPhrases.map((p) => p.category))]
  const selectedPhrasesArray = allPhrases.filter((p) => selectedPhrases.has(p.id))

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="max-w-6xl mx-auto px-4 py-4">
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
                  <FileText className="h-6 w-6" />
                  Phrasebook Generator
                </h1>
                <p className="text-muted-foreground">Select phrases to create your custom travel phrasebook</p>
              </div>
            </div>
            <Button onClick={generatePhrasebook} disabled={selectedPhrases.size === 0 || isGenerating}>
              <Download className="h-4 w-4 mr-2" />
              {isGenerating ? "Generating..." : `Generate PDF (${selectedPhrases.size})`}
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Phrase Selection */}
          <div className="lg:col-span-2 space-y-6">
            {categories.map((category) => {
              const categoryPhrases = allPhrases.filter((p) => p.category === category)
              const selectedInCategory = categoryPhrases.filter((p) => selectedPhrases.has(p.id)).length

              return (
                <Card key={category}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{category}</CardTitle>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleSelectAll(category)}
                        className="bg-transparent"
                      >
                        {selectedInCategory === categoryPhrases.length ? "Deselect All" : "Select All"}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {categoryPhrases.map((phrase) => (
                      <div key={phrase.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50">
                        <Checkbox
                          id={phrase.id}
                          checked={selectedPhrases.has(phrase.id)}
                          onCheckedChange={() => handlePhraseToggle(phrase.id)}
                        />
                        <div className="flex-1 space-y-1">
                          <div className="font-medium text-primary">{phrase.chinese}</div>
                          <div className="text-sm text-muted-foreground">{phrase.pinyin}</div>
                          <div className="text-sm">{phrase.english}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Preview */}
          <div className="space-y-6">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Phrasebook Preview</CardTitle>
                <p className="text-sm text-muted-foreground">{selectedPhrases.size} phrases selected</p>
              </CardHeader>
              <CardContent className="space-y-3 max-h-96 overflow-y-auto">
                {selectedPhrasesArray.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">Select phrases to see preview</p>
                ) : (
                  selectedPhrasesArray.map((phrase) => (
                    <div key={phrase.id} className="p-3 bg-muted/30 rounded-lg">
                      <div className="font-medium text-primary text-sm">{phrase.chinese}</div>
                      <div className="text-xs text-muted-foreground">{phrase.pinyin}</div>
                      <div className="text-xs">{phrase.english}</div>
                    </div>
                  ))
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">PDF Features</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Printable format</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Organized by category</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Chinese, Pinyin & English</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Pocket-sized layout</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
