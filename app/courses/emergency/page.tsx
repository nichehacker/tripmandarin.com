import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { PhraseCard } from '@/components/phrase-card'
import { DialogueSection } from '@/components/dialogue-section'
import { CulturalTip } from '@/components/cultural-tip'
import { AudioControls } from '@/components/audio-controls'

export default function EmergencyCoursePage() {
  const phrases = [
    { chinese: '救命！', pinyin: 'Jiùmìng!', english: 'Help!' },
    { chinese: '请叫警察', pinyin: 'Qǐng jiào jǐngchá', english: 'Please call the police' },
    { chinese: '请叫救护车', pinyin: 'Qǐng jiào jiùhùchē', english: 'Please call an ambulance' },
    { chinese: '我需要帮助', pinyin: 'Wǒ xūyào bāngzhù', english: 'I need help' },
    { chinese: '我迷路了', pinyin: 'Wǒ mílù le', english: "I'm lost" },
    { chinese: '我生病了', pinyin: 'Wǒ shēngbìng le', english: "I'm sick" },
    { chinese: '我受伤了', pinyin: 'Wǒ shòushāng le', english: "I'm injured" },
    { chinese: '医院在哪里？', pinyin: 'Yīyuàn zài nǎlǐ?', english: 'Where is the hospital?' },
    { chinese: '我对...过敏', pinyin: 'Wǒ duì... guòmǐn', english: "I'm allergic to..." },
    {
      chinese: '请联系我的大使馆',
      pinyin: 'Qǐng liánxì wǒ de dàshǐguǎn',
      english: 'Please contact my embassy'
    }
  ]

  const dialogue = [
    {
      speaker: 'You',
      chinese: '救命！我需要帮助！',
      pinyin: 'Jiùmìng! Wǒ xūyào bāngzhù!',
      english: 'Help! I need help!'
    },
    {
      speaker: 'Person',
      chinese: '怎么了？发生什么事了？',
      pinyin: 'Zěnme le? Fāshēng shénme shì le?',
      english: "What's wrong? What happened?"
    },
    {
      speaker: 'You',
      chinese: '我受伤了，请叫救护车',
      pinyin: 'Wǒ shòushāng le, qǐng jiào jiùhùchē',
      english: "I'm injured, please call an ambulance"
    },
    {
      speaker: 'Person',
      chinese: '好的，我马上打电话',
      pinyin: 'Hǎo de, wǒ mǎshàng dǎ diànhuà',
      english: "Okay, I'll call right away"
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
                  🚨 Emergency Situations
                </h1>
                <p className="text-muted-foreground">Critical phrases for urgent situations</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <AudioControls />
              </div>
              <Button variant="outline" asChild>
                <Link href="/practice">
                  Practice Now
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Cultural Tip */}
        <CulturalTip tip="Emergency numbers in China: Police 110, Fire 119, Ambulance 120. Keep your passport and emergency contacts handy. Many hospitals have English-speaking staff in major cities." />

        {/* Phrases Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Emergency Phrases</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {phrases.map((phrase, index) => (
              <PhraseCard key={index} {...phrase} />
            ))}
          </div>
        </section>

        {/* Dialogue Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Sample Conversation</h2>
          <DialogueSection title="Asking for Emergency Help" dialogue={dialogue} />
        </section>

        {/* Important Numbers */}
        <section className="bg-red-50 dark:bg-red-950/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
          <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">
            🚨 Important Emergency Numbers
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 text-center">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="text-2xl font-bold text-red-600">110</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Police</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="text-2xl font-bold text-red-600">119</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Fire</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="text-2xl font-bold text-red-600">120</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Ambulance</div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between pt-8">
          <Button variant="outline" asChild>
            <Link href="/courses/shopping">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous: Shopping
            </Link>
          </Button>
          <Button asChild>
            <Link href="/practice">
              Start Practice
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
