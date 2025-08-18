import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { PhraseCard } from "@/components/phrase-card"
import { DialogueSection } from "@/components/dialogue-section"
import { CulturalTip } from "@/components/cultural-tip"

export default function HotelCoursePage() {
  const phrases = [
    { chinese: "我有预订", pinyin: "Wǒ yǒu yùdìng", english: "I have a reservation" },
    { chinese: "入住登记", pinyin: "Rùzhù dēngjì", english: "Check-in" },
    { chinese: "退房", pinyin: "Tuì fáng", english: "Check-out" },
    { chinese: "房间号码", pinyin: "Fángjiān hàomǎ", english: "Room number" },
    { chinese: "钥匙", pinyin: "Yàoshi", english: "Key" },
    { chinese: "WiFi密码", pinyin: "WiFi mìmǎ", english: "WiFi password" },
    { chinese: "早餐几点？", pinyin: "Zǎocān jǐ diǎn?", english: "What time is breakfast?" },
    { chinese: "叫醒服务", pinyin: "Jiàoxǐng fúwù", english: "Wake-up call" },
  ]

  const dialogue = [
    {
      speaker: "You",
      chinese: "你好，我有预订",
      pinyin: "Nǐ hǎo, wǒ yǒu yùdìng",
      english: "Hello, I have a reservation",
    },
    {
      speaker: "Receptionist",
      chinese: "请问您的姓名？",
      pinyin: "Qǐng wèn nín de xìngmíng?",
      english: "May I have your name?",
    },
    {
      speaker: "You",
      chinese: "我叫约翰·史密斯",
      pinyin: "Wǒ jiào Yuēhàn Shǐmìsī",
      english: "My name is John Smith",
    },
    {
      speaker: "Receptionist",
      chinese: "好的，这是您的房卡，房间在8楼",
      pinyin: "Hǎo de, zhè shì nín de fángkǎ, fángjiān zài bā lóu",
      english: "Okay, here's your room card, the room is on the 8th floor",
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
                <h1 className="text-2xl font-bold flex items-center gap-2">🏨 Hotel & Accommodation</h1>
                <p className="text-muted-foreground">Navigate hotel services and check-in processes</p>
              </div>
            </div>
            <Button variant="outline" asChild>
              <Link href="/courses/shopping">
                Next: Shopping
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Cultural Tip */}
        <CulturalTip tip="Chinese hotels often require registration with your passport. Keep your room card with you as it may be needed to access elevators. Hotel staff usually speak some English in major cities." />

        {/* Phrases Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Essential Hotel Phrases</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {phrases.map((phrase, index) => (
              <PhraseCard key={index} {...phrase} />
            ))}
          </div>
        </section>

        {/* Dialogue Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Sample Conversation</h2>
          <DialogueSection title="Hotel Check-in" dialogue={dialogue} />
        </section>

        {/* Navigation */}
        <div className="flex justify-between pt-8">
          <Button variant="outline" asChild>
            <Link href="/courses/restaurant">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous: Restaurant
            </Link>
          </Button>
          <Button asChild>
            <Link href="/courses/shopping">
              Next: Shopping
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
