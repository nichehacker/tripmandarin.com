import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { FlashcardPractice } from "@/components/flashcard-practice"

export default function FlashcardsPage() {
  const sampleCards = [
    { chinese: "你好", pinyin: "Nǐ hǎo", english: "Hello" },
    { chinese: "谢谢", pinyin: "Xiè xiè", english: "Thank you" },
    { chinese: "多少钱？", pinyin: "Duōshǎo qián?", english: "How much?" },
    { chinese: "我要去...", pinyin: "Wǒ yào qù...", english: "I want to go to..." },
    { chinese: "不要辣", pinyin: "Bù yào là", english: "No spicy" },
    { chinese: "买单", pinyin: "Mǎi dān", english: "Check, please" },
    { chinese: "我有预订", pinyin: "Wǒ yǒu yùdìng", english: "I have a reservation" },
    { chinese: "WiFi密码", pinyin: "WiFi mìmǎ", english: "WiFi password" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/practice">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Practice
            </Link>
          </Button>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        <FlashcardPractice cards={sampleCards} title="Essential Travel Phrases" />
      </main>
    </div>
  )
}
