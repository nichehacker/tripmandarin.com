'use client'

import { Button } from '@/components/ui/button'
import {
  ArrowLeft,
  Clock,
  User,
  Tag,
  Calendar,
  Car,
  CreditCard,
  Smartphone,
  MapPin,
  AlertTriangle,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getGuideBySlug } from '@/lib/guides'

interface GuideDetailPageProps {
  params: {
    slug: string
  }
}

export default function GuideDetailPage({ params }: GuideDetailPageProps) {
  const guide = getGuideBySlug(params.slug)

  if (!guide) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      {/* Header */}
      <div className="bg-card border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/guide">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Guides
            </Link>
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
              <Tag className="h-4 w-4 mr-1" />
              {guide.category}
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">{guide.title}</h1>

          <p className="text-xl text-gray-600 mb-6">{guide.description}</p>

          <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {guide.author}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {guide.readTime}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(guide.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>

          {/* Hero Image */}
          <div className="aspect-video overflow-hidden rounded-lg mb-8">
            <img
              src={guide.image || '/placeholder.svg'}
              alt={guide.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="text-base text-gray-800 leading-relaxed space-y-4">
            {renderMarkdownContent(guide.content)}
          </div>
        </div>

        {/* Back to Guides */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Button asChild className="bg-red-600 hover:bg-red-700">
            <Link href="/guide">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Guides
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

const guides = [
  {
    id: 1,
    slug: 'how-to-take-taxi-beijing-complete-guide',
    title: 'How to Take a Taxi in Beijing: A Complete Guide for Foreign Travelers',
    description:
      'Learn how to take a taxi in Beijing safely and efficiently. This guide covers taxi types, fares, how to communicate in Chinese, and tips for foreign travelers.',
    author: 'TripMandarin Team',
    readTime: '8 min read',
    category: 'Transportation',
    date: '2024-01-15',
    image: '/placeholder.svg?height=400&width=800',
    content: `Taking a taxi in Beijing can be convenient but confusing for foreign travelers. This guide provides **step-by-step instructions**, practical tips, and essential Chinese phrases to help you navigate the city safely.

## Understanding Beijing Taxis

Beijing has **metered taxis**, which are the most common for short trips. Key points:  

- Standard taxis (Red, Green, or Blue)  
- Ride-hailing apps (DiDi)  

**Fare System:**  
- Starting fare: ¥13 for the first 3 km  
- Extra: ¥2.3–¥3 per km after  
- Night fare surcharge: ¥3–¥5 (11 PM–5 AM)  

**Payment Options:**  
- Cash (RMB)  
- Mobile payment: Alipay, WeChat Pay  
- Some taxis accept foreign credit cards via app booking  

## Essential Chinese Phrases for Taxi

| English | Chinese | Pinyin |
|---------|--------|--------|
| Taxi, please go to **[destination]** | 请去 **[destination]** | Qǐng qù **[destination]** |
| Stop here, please | 请在这里停 | Qǐng zài zhèlǐ tíng |
| How much is the fare? | 多少钱？ | Duōshǎo qián? |
| I want to go to the airport | 我要去机场 | Wǒ yào qù jīchǎng |
| I don't speak Chinese | 我不会说中文 | Wǒ bù huì shuō zhōngwén |

**Tip:** Copy or screenshot these phrases on your phone for easy reference.

## How to Hail a Taxi

**Street Hailing:**  
- Stand on the sidewalk, look for a **red or green taxi with a green light** (available).  

**Taxi Stand:**  
- Found near hotels, shopping malls, subway stations.  

**Ride-Hailing App:**  
- Use DiDi, available in English. Enter your destination and confirm fare estimate.

## Important Tips for Foreign Travelers

- Always **check the meter**; avoid unlicensed taxis.  
- Carry **small cash** (RMB) in case the driver does not accept mobile payments.  
- **Address cards:** Print your hotel or destination address in Chinese characters.  
- **Avoid rush hours** (7–9 AM, 5–7 PM) to save time.  

## Using DiDi for Convenience

DiDi is like Uber in China.

1. Download DiDi app (English version available).  
2. Enter destination in Chinese or select on map.  
3. Pay with credit card or Alipay/WeChat.  

**Pros:** Fixed fare, safety, English interface.  

## Conclusion

Taking a taxi in Beijing is **easy and safe** if you know the rules, fare system, and basic Chinese phrases. This guide ensures that foreign travelers can reach their destinations smoothly and confidently.`
  }
]

function renderMarkdownContent(content: string) {
  const sections = content.split('\n\n')

  return sections.map((section, index) => {
    // Headers
    if (section.startsWith('## ')) {
      const title = section.replace('## ', '')
      return (
        <h2
          key={index}
          className="text-xl font-semibold text-gray-800 mt-8 mb-4 flex items-center gap-2"
        >
          <span className="text-red-600">📍</span>
          {title}
        </h2>
      )
    }

    // Table content
    if (section.includes('|') && section.includes('Chinese') && section.includes('Pinyin')) {
      const rows = section.split('\n').filter(row => row.includes('|') && !row.includes('---'))
      return (
        <div key={index} className="my-8">
          <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden">
            <thead className="bg-red-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left font-semibold">English</th>
                <th className="py-3 px-4 text-left font-semibold">Chinese</th>
                <th className="py-3 px-4 text-left font-semibold">Pinyin</th>
              </tr>
            </thead>
            <tbody>
              {rows.slice(1).map((row, rowIndex) => {
                const cells = row
                  .split('|')
                  .map(cell => cell.trim())
                  .filter(cell => cell)
                return (
                  <tr key={rowIndex} className="border-b">
                    <td className="py-3 px-4 font-medium">{cells[0]?.replace(/\*\*/g, '')}</td>
                    <td className="py-3 px-4 text-red-600 font-semibold">
                      {cells[1]?.replace(/\*\*/g, '')}
                    </td>
                    <td className="py-3 px-4 text-gray-600">{cells[2]?.replace(/\*\*/g, '')}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )
    }

    // Lists
    if (section.includes('- ') || section.includes('. ')) {
      const items = section.split('\n').filter(line => line.trim())
      const title = items[0].includes(':') ? items[0] : null
      const listItems = title ? items.slice(1) : items

      return (
        <div key={index} className="mb-4">
          {title && (
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="text-red-600">▶</span>
              {title.replace(/\*\*/g, '')}
            </h3>
          )}
          <ul className="space-y-2">
            {listItems.map((item, itemIndex) => {
              const text = item.replace(/^[-\d.]\s*/, '').replace(/\*\*/g, '')
              let IconComponent = CheckCircle
              let iconColor = 'text-green-600'

              if (text.toLowerCase().includes('taxi') || text.toLowerCase().includes('car')) {
                IconComponent = Car
                iconColor = 'text-red-600'
              } else if (
                text.toLowerCase().includes('payment') ||
                text.toLowerCase().includes('cash') ||
                text.toLowerCase().includes('credit')
              ) {
                IconComponent = CreditCard
                iconColor = 'text-green-600'
              } else if (
                text.toLowerCase().includes('app') ||
                text.toLowerCase().includes('didi') ||
                text.toLowerCase().includes('phone')
              ) {
                IconComponent = Smartphone
                iconColor = 'text-blue-600'
              } else if (
                text.toLowerCase().includes('address') ||
                text.toLowerCase().includes('destination')
              ) {
                IconComponent = MapPin
                iconColor = 'text-purple-600'
              } else if (
                text.toLowerCase().includes('avoid') ||
                text.toLowerCase().includes('check') ||
                text.toLowerCase().includes('tip')
              ) {
                IconComponent = AlertTriangle
                iconColor = 'text-orange-600'
              }

              if (item.match(/^\d+\./)) {
                return (
                  <li key={itemIndex} className="flex items-start gap-3 mb-2">
                    <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {item.match(/^(\d+)/)?.[1]}
                    </span>
                    <span>{text}</span>
                  </li>
                )
              }

              return (
                <li key={itemIndex} className="flex items-start gap-2 mb-2">
                  <IconComponent className={`h-5 w-5 ${iconColor} mt-0.5 flex-shrink-0`} />
                  <span>{text}</span>
                </li>
              )
            })}
          </ul>
        </div>
      )
    }

    // Tips/Special content
    if (section.includes('**Tip:**')) {
      const tipText = section.replace('**Tip:**', '').trim()
      return (
        <div key={index} className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4 rounded-r-lg">
          <div className="flex items-start gap-2">
            <span className="text-blue-600">💡</span>
            <p className="text-blue-800">
              <strong>Tip:</strong> {tipText}
            </p>
          </div>
        </div>
      )
    }

    // Regular paragraphs
    return (
      <p key={index} className="mb-4 text-gray-800 leading-relaxed">
        {section
          .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
          .split('<strong')
          .map((part, partIndex) => {
            if (partIndex === 0) return part
            const [boldPart, ...rest] = part.split('</strong>')
            return (
              <span key={partIndex}>
                <strong className="font-semibold text-gray-900">
                  {boldPart.replace(' class="font-semibold text-gray-900">', '')}
                </strong>
                {rest.join('</strong>')}
              </span>
            )
          })}
      </p>
    )
  })
}
