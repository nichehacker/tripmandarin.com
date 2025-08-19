import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { PhraseCard } from '@/components/phrase-card'
import { DialogueSection } from '@/components/dialogue-section'
import { CulturalTip } from '@/components/cultural-tip'
import { AudioControls } from '@/components/audio-controls'

export default function ShoppingCoursePage() {
  const phrases = [
    { chinese: '多少钱？', pinyin: 'Duōshǎo qián?', english: 'How much?' },
    { chinese: '太贵了', pinyin: 'Tài guì le', english: 'Too expensive' },
    { chinese: '便宜一点', pinyin: 'Piányí yīdiǎn', english: 'A little cheaper' },
    { chinese: '我要这个', pinyin: 'Wǒ yào zhège', english: 'I want this one' },
    {
      chinese: '有没有小一点的？',
      pinyin: 'Yǒu méiyǒu xiǎo yīdiǎn de?',
      english: 'Do you have a smaller one?'
    },
    { chinese: '可以试穿吗？', pinyin: 'Kěyǐ shìchuān ma?', english: 'Can I try it on?' },
    { chinese: '我可以刷卡吗？', pinyin: 'Wǒ kěyǐ shuākǎ ma?', english: 'Can I pay by card?' },
    { chinese: '打折吗？', pinyin: 'Dǎzhé ma?', english: 'Is there a discount?' },
    { chinese: '包装一下', pinyin: 'Bāozhuāng yīxià', english: 'Please wrap it up' },
    { chinese: '发票', pinyin: 'Fāpiào', english: 'Receipt/Invoice' }
  ]

  const dialogue = [
    {
      speaker: 'You',
      chinese: '你好，这件衣服多少钱？',
      pinyin: 'Nǐ hǎo, zhè jiàn yīfu duōshǎo qián?',
      english: 'Hello, how much is this clothing?'
    },
    {
      speaker: 'Seller',
      chinese: '这件是200块',
      pinyin: 'Zhè jiàn shì èrbǎi kuài',
      english: 'This one is 200 yuan'
    },
    {
      speaker: 'You',
      chinese: '太贵了，便宜一点好吗？',
      pinyin: 'Tài guì le, piányí yīdiǎn hǎo ma?',
      english: 'Too expensive, can you make it cheaper?'
    },
    {
      speaker: 'Seller',
      chinese: '最低180块',
      pinyin: 'Zuìdī yībǎi bāshí kuài',
      english: 'Lowest price is 180 yuan'
    }
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
                <h1 className="text-2xl font-bold flex items-center gap-2">
                  🛍️ Shopping & Markets
                </h1>
                <p className="text-muted-foreground">Master bargaining and shopping phrases</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <AudioControls />
              </div>
              <Button variant="outline" asChild>
                <Link href="/courses/emergency">
                  Next: Emergency
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Cultural Tip */}
        <CulturalTip tip="Bargaining is common in Chinese markets and street vendors. Start by offering 30-50% of the asking price. Mobile payments like WeChat Pay and Alipay are widely accepted." />

        {/* Phrases Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Essential Shopping Phrases</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {phrases.map((phrase, index) => (
              <PhraseCard key={index} {...phrase} />
            ))}
          </div>
        </section>

        {/* Dialogue Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Sample Conversation</h2>
          <DialogueSection title="Bargaining at a Market" dialogue={dialogue} />
        </section>

        {/* Navigation */}
        <div className="flex justify-between pt-8">
          <Button variant="outline" asChild>
            <Link href="/courses/hotel">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous: Hotel
            </Link>
          </Button>
          <Button asChild>
            <Link href="/courses/emergency">
              Next: Emergency
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
