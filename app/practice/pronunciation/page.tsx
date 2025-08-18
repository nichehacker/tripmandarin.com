import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { PronunciationPractice } from "@/components/pronunciation-practice"

export default function PronunciationPage() {
  const samplePhrase = {
    chinese: "你好，我要去北京站",
    pinyin: "Nǐ hǎo, wǒ yào qù Běijīng zhàn",
    english: "Hello, I want to go to Beijing Station",
  }

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
        <PronunciationPractice phrase={samplePhrase} />
      </main>
    </div>
  )
}
