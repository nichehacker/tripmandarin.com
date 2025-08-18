import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { PhraseCard } from "@/components/phrase-card"
import { DialogueSection } from "@/components/dialogue-section"
import { CulturalTip } from "@/components/cultural-tip"
import { AudioControls } from "@/components/audio-controls"

export default function TaxiCoursePage() {
  const phrases = [
    { chinese: "你好", pinyin: "Nǐ hǎo", english: "Hello" },
    { chinese: "请问", pinyin: "Qǐng wèn", english: "Excuse me" },
    { chinese: "我要去...", pinyin: "Wǒ yào qù...", english: "I want to go to..." },
    { chinese: "多少钱？", pinyin: "Duōshǎo qián?", english: "How much?" },
    { chinese: "太贵了", pinyin: "Tài guì le", english: "Too expensive" },
    { chinese: "请开发票", pinyin: "Qǐng kāi fāpiào", english: "Please give me a receipt" },
    { chinese: "停车", pinyin: "Tíng chē", english: "Stop the car" },
    { chinese: "谢谢", pinyin: "Xiè xiè", english: "Thank you" },
    { chinese: "不用找了", pinyin: "Bù yòng zhǎo le", english: "Keep the change" },
    { chinese: "我赶时间", pinyin: "Wǒ gǎn shíjiān", english: "I'm in a hurry" },
  ]

  const dialogue = [
    {
      speaker: "You",
      chinese: "你好，我要去北京站",
      pinyin: "Nǐ hǎo, wǒ yào qù Běijīng zhàn",
      english: "Hello, I want to go to Beijing Station",
    },
    {
      speaker: "Driver",
      chinese: "好的，大概需要30分钟",
      pinyin: "Hǎo de, dàgài xūyào sānshí fēnzhōng",
      english: "Okay, it will take about 30 minutes",
    },
    {
      speaker: "You",
      chinese: "多少钱？",
      pinyin: "Duōshǎo qián?",
      english: "How much will it cost?",
    },
    {
      speaker: "Driver",
      chinese: "大概50块钱",
      pinyin: "Dàgài wǔshí kuài qián",
      english: "About 50 yuan",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/courses">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Courses
                </Link>
              </Button>
              <div>
                <h1 className="text-2xl font-bold flex items-center gap-2">🚕 Taxi & Transportation</h1>
                <p className="text-muted-foreground">Learn essential phrases for getting around</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <AudioControls />
              </div>
              <Button variant="outline" asChild>
                <Link href="/courses/restaurant">
                  Next: Restaurant
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Cultural Tip */}
        <CulturalTip tip="In China, it's polite to sit in the back seat of a taxi. Always have your destination written in Chinese characters to show the driver." />

        {/* Phrases Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Essential Taxi Phrases</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {phrases.map((phrase, index) => (
              <PhraseCard key={index} {...phrase} />
            ))}
          </div>
        </section>

        {/* Dialogue Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Sample Conversation</h2>
          <DialogueSection title="Taking a Taxi to the Train Station" dialogue={dialogue} />
        </section>

        {/* Navigation */}
        <div className="flex justify-between pt-8">
          <Button variant="outline" asChild>
            <Link href="/courses">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Courses
            </Link>
          </Button>
          <Button asChild>
            <Link href="/courses/restaurant">
              Next: Restaurant
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
