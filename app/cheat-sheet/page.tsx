'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FileImage, FileText, ArrowLeft } from 'lucide-react'
import { useRef } from 'react'
import Link from 'next/link'

export default function CheatSheetPage() {
  const cheatSheetRef = useRef<HTMLDivElement>(null)

  const essentialPhrases = [
    {
      category: 'Greetings',
      phrases: [
        { chinese: '你好', pinyin: 'nǐ hǎo', english: 'Hello' },
        { chinese: '谢谢', pinyin: 'xiè xiè', english: 'Thank you' },
        { chinese: '不客气', pinyin: 'bù kè qì', english: "You're welcome" },
        { chinese: '对不起', pinyin: 'duì bù qǐ', english: 'Sorry' }
      ]
    },
    {
      category: 'Numbers',
      phrases: [
        { chinese: '一', pinyin: 'yī', english: '1' },
        { chinese: '二', pinyin: 'èr', english: '2' },
        { chinese: '三', pinyin: 'sāam', english: '3' },
        { chinese: '十', pinyin: 'shí', english: '10' },
        { chinese: '一百', pinyin: 'yī bǎi', english: '100' }
      ]
    },
    {
      category: 'Emergency',
      phrases: [
        { chinese: '救命', pinyin: 'jiù mìng', english: 'Help!' },
        { chinese: '我需要帮助', pinyin: 'wǒ xū yào bāng zhù', english: 'I need help' },
        { chinese: '请叫警察', pinyin: 'qǐng jiào jǐng chá', english: 'Please call police' },
        { chinese: '我迷路了', pinyin: 'wǒ mí lù le', english: "I'm lost" }
      ]
    },
    {
      category: 'Transportation',
      phrases: [
        { chinese: '出租车', pinyin: 'chū zū chē', english: 'Taxi' },
        { chinese: '地铁', pinyin: 'dì tiě', english: 'Subway' },
        { chinese: '机场', pinyin: 'jī chǎng', english: 'Airport' },
        { chinese: '火车站', pinyin: 'huǒ chē zhàn', english: 'Train station' }
      ]
    },
    {
      category: 'Food & Dining',
      phrases: [
        { chinese: '我想要这个', pinyin: 'wǒ xiǎng yào zhè gè', english: 'I want this' },
        { chinese: '买单', pinyin: 'mǎi dān', english: 'Check please' },
        { chinese: '不辣', pinyin: 'bù là', english: 'Not spicy' },
        { chinese: '素食', pinyin: 'sù shí', english: 'Vegetarian' }
      ]
    },
    {
      category: 'Shopping',
      phrases: [
        { chinese: '多少钱', pinyin: 'duō shǎo qián', english: 'How much?' },
        { chinese: '太贵了', pinyin: 'tài guì le', english: 'Too expensive' },
        { chinese: '便宜一点', pinyin: 'pián yí yī diǎn', english: 'Cheaper please' },
        { chinese: '我买了', pinyin: 'wǒ mǎi le', english: "I'll take it" }
      ]
    }
  ]

  const handleExportPDF = () => {
    const printContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Chinese Travel Cheat Sheet</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
              font-family: system-ui, -apple-system, sans-serif; 
              line-height: 1.4; 
              color: #000000;
              background: white;
              padding: 20px;
            }
            .header { text-align: center; margin-bottom: 30px; }
            .title { font-size: 28px; font-weight: bold; color: #dc2626; margin-bottom: 10px; }
            .subtitle { font-size: 16px; color: #666666; margin-bottom: 20px; }
            .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
            .category { 
              border: 2px solid #dc2626; 
              border-radius: 8px; 
              padding: 15px; 
              background: white;
              break-inside: avoid;
            }
            .category-title { 
              font-size: 18px; 
              font-weight: bold; 
              color: #dc2626; 
              margin-bottom: 15px;
              text-align: center;
            }
            .phrase { 
              margin-bottom: 12px; 
              padding: 8px; 
              border: 1px solid #e5e5e5; 
              border-radius: 4px;
            }
            .chinese { font-size: 16px; font-weight: bold; color: #000000; }
            .pinyin { font-size: 14px; color: #dc2626; margin: 2px 0; }
            .english { font-size: 14px; color: #666666; }
            .tips { 
              margin-top: 30px; 
              border: 2px solid #dc2626; 
              border-radius: 8px; 
              padding: 15px;
            }
            .tips-title { font-size: 18px; font-weight: bold; color: #dc2626; margin-bottom: 10px; }
            .tip { font-size: 14px; color: #666666; margin-bottom: 5px; }
            @media print {
              body { font-size: 12px; }
              .grid { grid-template-columns: repeat(3, 1fr); }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="title">Chinese Travel Cheat Sheet</div>
            <div class="subtitle">Essential Chinese phrases for travelers</div>
          </div>
          <div class="grid">
            ${essentialPhrases
              .map(
                category => `
              <div class="category">
                <div class="category-title">${category.category}</div>
                ${category.phrases
                  .map(
                    phrase => `
                  <div class="phrase">
                    <div class="chinese">${phrase.chinese}</div>
                    <div class="pinyin">${phrase.pinyin}</div>
                    <div class="english">${phrase.english}</div>
                  </div>
                `
                  )
                  .join('')}
              </div>
            `
              )
              .join('')}
          </div>
          <div class="tips">
            <div class="tips-title">Quick Tips</div>
            <div class="tip">• Tone matters: Chinese is a tonal language - pay attention to pinyin tone marks</div>
            <div class="tip">• Point and show: Don't hesitate to point at things or show this cheat sheet</div>
            <div class="tip">• Download offline: Save this page for offline access when traveling</div>
            <div class="tip">• Practice pronunciation: Use our pronunciation tools before your trip</div>
          </div>
        </body>
      </html>
    `

    const printWindow = window.open('', '_blank')
    if (printWindow) {
      printWindow.document.write(printContent)
      printWindow.document.close()
      printWindow.focus()
      setTimeout(() => {
        printWindow.print()
      }, 250)
    }
  }

  const handleExportImage = async () => {
    try {
      const iframe = document.createElement('iframe')
      iframe.style.cssText = 'position: absolute; left: -9999px; width: 800px; height: 600px;'
      document.body.appendChild(iframe)

      const iframeDoc = iframe.contentDocument!
      iframeDoc.open()
      iframeDoc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <style>
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body { 
                font-family: system-ui, -apple-system, sans-serif; 
                background: #ffffff;
                padding: 20px;
                width: 800px;
              }
            </style>
          </head>
          <body>
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="font-size: 32px; font-weight: bold; color: #dc2626; margin-bottom: 10px;">Chinese Travel Cheat Sheet</h1>
              <p style="font-size: 16px; color: #666666;">Essential Chinese phrases for travelers</p>
            </div>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
              ${essentialPhrases
                .map(
                  category => `
                <div style="border: 2px solid #dc2626; border-radius: 8px; padding: 15px; background: #ffffff;">
                  <h3 style="font-size: 18px; font-weight: bold; color: #dc2626; margin-bottom: 15px; text-align: center;">${
                    category.category
                  }</h3>
                  ${category.phrases
                    .map(
                      phrase => `
                    <div style="margin-bottom: 12px; padding: 8px; border: 1px solid #e5e5e5; border-radius: 4px; background: #ffffff;">
                      <div style="font-size: 16px; font-weight: bold; color: #000000; margin-bottom: 2px;">${phrase.chinese}</div>
                      <div style="font-size: 14px; color: #dc2626; margin-bottom: 2px;">${phrase.pinyin}</div>
                      <div style="font-size: 14px; color: #666666;">${phrase.english}</div>
                    </div>
                  `
                    )
                    .join('')}
                </div>
              `
                )
                .join('')}
            </div>
            <div style="margin-top: 30px; border: 2px solid #dc2626; border-radius: 8px; padding: 15px; background: #ffffff;">
              <h3 style="font-size: 18px; font-weight: bold; color: #dc2626; margin-bottom: 10px;">Quick Tips</h3>
              <div style="font-size: 14px; color: #666666; line-height: 1.5;">
                • Tone matters: Chinese is a tonal language - pay attention to pinyin tone marks<br>
                • Point and show: Don't hesitate to point at things or show this cheat sheet<br>
                • Download offline: Save this page for offline access when traveling<br>
                • Practice pronunciation: Use our pronunciation tools before your trip
              </div>
            </div>
          </body>
        </html>
      `)
      iframeDoc.close()

      // Wait for iframe to load
      await new Promise(resolve => setTimeout(resolve, 100))

      const html2canvas = (await import('html2canvas')).default
      const canvas = await html2canvas(iframeDoc.body, {
        backgroundColor: '#ffffff',
        scale: 2,
        useCORS: true,
        allowTaint: true,
        foreignObjectRendering: false,
        width: 800,
        height: iframeDoc.body.scrollHeight
      })

      document.body.removeChild(iframe)

      const link = document.createElement('a')
      link.download = 'chinese-travel-cheat-sheet.png'
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch (error) {
      console.error('Error generating image:', error)
      alert('Error generating image. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <div className="text-sm text-muted-foreground">Chinese Travel Cheat Sheet</div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div
          className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-8"
          ref={cheatSheetRef}
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-red-600 mb-4">Chinese Travel Cheat Sheet</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Essential Chinese phrases for travelers - your quick reference guide for navigating
              China
            </p>

            <div className="export-buttons flex justify-center gap-4 mt-6">
              <Button onClick={handleExportPDF} className="bg-red-600 hover:bg-red-700 text-white">
                <FileText className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
              <Button
                onClick={handleExportImage}
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
              >
                <FileImage className="w-4 h-4 mr-2" />
                Export Image
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {essentialPhrases.map((category, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-red-100">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-red-100 text-red-700">
                      {category.category}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {category.phrases.map((phrase, phraseIndex) => (
                    <div key={phraseIndex} className="p-3 bg-white rounded-lg border border-red-50">
                      <div className="text-lg font-medium text-gray-900 mb-1">{phrase.chinese}</div>
                      <div className="text-sm text-red-600 mb-1">{phrase.pinyin}</div>
                      <div className="text-sm text-gray-600">{phrase.english}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-white/80 backdrop-blur-sm border-red-100 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-red-600">Quick Tips</CardTitle>
              </CardHeader>
              <CardContent className="text-left space-y-2">
                <p className="text-sm text-gray-600">
                  • <strong>Tone matters:</strong> Chinese is a tonal language - pay attention to
                  pinyin tone marks
                </p>
                <p className="text-sm text-gray-600">
                  • <strong>Point and show:</strong> Don't hesitate to point at things or show this
                  cheat sheet
                </p>
                <p className="text-sm text-gray-600">
                  • <strong>Download offline:</strong> Save this page for offline access when
                  traveling
                </p>
                <p className="text-sm text-gray-600">
                  • <strong>Practice pronunciation:</strong> Use our pronunciation tools before your
                  trip
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
