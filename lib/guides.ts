export interface Guide {
  id: number
  slug: string
  title: string
  description: string
  author: string
  readTime: string
  category: string
  date: string
  image: string
  content: string
}

export const guides: Guide[] = [
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
    image: '/guide-1.png?height=200&width=400',
    content: `# How to Take a Taxi in Beijing: A Complete Guide for Foreign Travelers

Taking a taxi in Beijing can be convenient but confusing for foreign travelers. This guide provides **step-by-step instructions**, practical tips, and essential Chinese phrases to help you navigate the city safely.

---

## 1. Understanding Beijing Taxis

Beijing has **metered taxis**, which are the most common for short trips. Key points:  

- **Taxi Types:**  
  - Standard taxis (Red, Green, or Blue)  
  - Ride-hailing apps (DiDi)  
- **Fare System:**  
  - Starting fare: ¥13 for the first 3 km  
  - Extra: ¥2.3–¥3 per km after  
  - Night fare surcharge: ¥3–¥5 (11 PM–5 AM)  
- **Payment Options:**  
  - Cash (RMB)  
  - Mobile payment: Alipay, WeChat Pay  
  - Some taxis accept foreign credit cards via app booking  

---

## 2. Essential Chinese Phrases for Taxi

| English | Chinese | Pinyin |
|---------|--------|--------|
| Taxi, please go to **[destination]** | 请去 **[destination]** | Qǐng qù **[destination]** |
| Stop here, please | 请在这里停 | Qǐng zài zhèlǐ tíng |
| How much is the fare? | 多少钱？ | Duōshǎo qián? |
| I want to go to the airport | 我要去机场 | Wǒ yào qù jīchǎng |
| I don't speak Chinese | 我不会说中文 | Wǒ bù huì shuō zhōngwén |

> Tip: Copy or screenshot these phrases on your phone for easy reference.

---

## 3. How to Hail a Taxi

1. **Street Hailing:**  
   - Stand on the sidewalk, look for a **red or green taxi with a green light** (available).  
2. **Taxi Stand:**  
   - Found near hotels, shopping malls, subway stations.  
3. **Ride-Hailing App:**  
   - Use DiDi, available in English. Enter your destination and confirm fare estimate.

---

## 4. Important Tips for Foreign Travelers

- Always **check the meter**; avoid unlicensed taxis.  
- Carry **small cash** (RMB) in case the driver does not accept mobile payments.  
- **Address cards:** Print your hotel or destination address in Chinese characters.  
- **Avoid rush hours** (7–9 AM, 5–7 PM) to save time.  

---

## 5. Using DiDi for Convenience

- DiDi is like Uber in China.  
- Steps:  
  1. Download DiDi app (English version available).  
  2. Enter destination in Chinese or select on map.  
  3. Pay with credit card or Alipay/WeChat.  
- Pros: Fixed fare, safety, English interface.  

---

## Conclusion

Taking a taxi in Beijing is **easy and safe** if you know the rules, fare system, and basic Chinese phrases. This guide ensures that foreign travelers can reach their destinations smoothly and confidently.`
  }
]

export const categories = ['All', 'Transportation']

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(guide => guide.slug === slug)
}
