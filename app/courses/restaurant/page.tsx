import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { PhraseCard } from "@/components/phrase-card"
import { DialogueSection } from "@/components/dialogue-section"
import { CulturalTip } from "@/components/cultural-tip"

export default function RestaurantCoursePage() {
  const phrases = [
    { chinese: "菜单", pinyin: "Càidān", english: "Menu" },
    { chinese: "我想要...", pinyin: "Wǒ xiǎng yào...", english: "I would like..." },
    { chinese: "这个多少钱？", pinyin: "Zhège duōshǎo qián?", english: "How much is this?" },
    { chinese: "不要辣", pinyin: "Bù yào là", english: "No spicy" },
    { chinese: "我吃素", pinyin: "Wǒ chī sù", english: "I'm vegetarian" },
    { chinese: "买单", pinyin: "Mǎi dān", english: "Check, please" },
    { chinese: "好吃", pinyin: "Hǎo chī", english: "Delicious" },
    { chinese: "我对...过敏", pinyin: "Wǒ duì... guòmǐn", english: "I'm allergic to..." },
    { chinese: "打包", pinyin: "Dǎ bāo", english: "Take away / To go" },
    { chinese: "推荐什么？", pinyin: "Tuījiàn shénme?", english: "What do you recommend?" },
    { chinese: "够了", pinyin: "Gòu le", english: "That's enough" },
    { chinese: "再来一个", pinyin: "Zài lái yīgè", english: "One more, please" },
  ]

  const dialogue = [
    {
      speaker: "Waiter",
      chinese: "欢迎光临！几位？",
      pinyin: "Huānyíng guānglín! Jǐ wèi?",
      english: "Welcome! How many people?",
    },
    {
      speaker: "You",
      chinese: "两位，谢谢",
      pinyin: "Liǎng wèi, xiè xiè",
      english: "Two people, thank you",
    },
    {
      speaker: "Waiter",
      chinese: "请看菜单，推荐宫保鸡丁",
      pinyin: "Qǐng kàn càidān, tuījiàn gōngbào jīdīng",
      english: "Please look at the menu, I recommend Kung Pao Chicken",
    },
    {
      speaker: "You",
      chinese: "好的，我要宫保鸡丁，不要辣",
      pinyin: "Hǎo de, wǒ yào gōngbào jīdīng, bù yào là",
      english: "Okay, I'll have Kung Pao Chicken, not spicy",
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
                <h1 className="text-2xl font-bold flex items-center gap-2">🍜 Restaurant & Dining</h1>
                <p className="text-muted-foreground">Master ordering food and dining etiquette</p>
              </div>
            </div>
            <Button variant="outline" asChild>
              <Link href="/courses/hotel">
                Next: Hotel
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Cultural Tip */}
        <CulturalTip tip="In Chinese restaurants, it's common to share dishes. Don't stick your chopsticks upright in rice - it's considered bad luck. Tea is often served automatically and refilled by staff." />

        {/* Phrases Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Essential Restaurant Phrases</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {phrases.map((phrase, index) => (
              <PhraseCard key={index} {...phrase} />
            ))}
          </div>
        </section>

        {/* Dialogue Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Sample Conversation</h2>
          <DialogueSection title="Ordering at a Chinese Restaurant" dialogue={dialogue} />
        </section>

        {/* Navigation */}
        <div className="flex justify-between pt-8">
          <Button variant="outline" asChild>
            <Link href="/courses/taxi">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous: Taxi
            </Link>
          </Button>
          <Button asChild>
            <Link href="/courses/hotel">
              Next: Hotel
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
