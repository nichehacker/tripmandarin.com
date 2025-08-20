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
    id: 2,
    slug: 'how-to-use-chinese-apps-complete-guide',
    title: 'How to Use Chinese Apps: Complete Guide for Travelers',
    description:
      'A step-by-step guide for foreign travelers visiting China. Learn how to use essential Chinese apps like WeChat, Xiaohongshu (RED/RedNote), Douyin, Alipay, Didi, Meituan, Ele.me, and Amap (Gaode Maps).',
    author: 'TripMandarin Team',
    readTime: '12 min read',
    category: 'Technology',
    date: '2024-01-20',
    image: '/guide-2.png?height=200&width=400',
    content: `# How to Use Chinese Apps: A Complete Guide for Travelers

Visiting China as a foreign tourist? Many essential services, from taxis to payments, rely on apps. This guide will walk you through the most important Chinese apps and show you how to use them step by step.

---

## 📱 1. WeChat (微信) – Everything in One App
**Purpose:** Messaging, payments, mini-programs, QR codes.  

**Steps to Use:**
1. 📲 Download WeChat from the App Store or Google Play.
2. 📞 Create an account using your phone number.
3. ✅ Verify your account via SMS code.
4. 👥 Add friends or scan QR codes to connect.
5. 💳 Use WeChat Pay for purchases (requires linking a Chinese bank card or foreign card in supported regions).

**💡 Tips:**
- Many restaurants, taxis, and shops only accept WeChat Pay or Alipay.  
- Mini-programs inside WeChat can book tickets, order food, or check bus schedules.

---

## 🌟 2. Xiaohongshu / RED / RedNote (小红书) – Social Discovery & Reviews
**Purpose:** Discover trending spots, restaurants, travel tips, and product reviews.  

**Steps to Use:**
1. 📲 Download Xiaohongshu (RED / RedNote).
2. 📝 Register with your phone number.
3. 🔍 Browse trending posts or search for specific locations or products.
4. 📌 Use the "Notes" feature to save or follow recommendations.
5. 💬 Engage with content by liking, commenting, or sharing.

**💡 Tips:**
- Xiaohongshu / RedNote is great for authentic local experiences and travel hacks.  
- Some content may be in Chinese only; Google Translate can help.

---

## 🎵 3. Douyin (抖音) – Short Videos & Entertainment
**Purpose:** Explore local trends, watch short videos, and discover cultural highlights.  

**Steps to Use:**
1. 📲 Download Douyin.
2. 📞 Register with your phone number.
3. 📺 Browse the "For You" feed or search specific locations and topics.
4. ➕ Follow creators or save videos for later.
5. 🎯 Use Douyin to discover local events, restaurants, and attractions.

**💡 Tips:**
- Douyin is the Chinese version of TikTok and differs from the international TikTok.  
- Many travel spots have short videos showcasing insider tips.

---

## 💰 4. Alipay (支付宝) – Mobile Payments & More
**Purpose:** Payments, money transfer, food delivery, public transport.  

**Steps to Use:**
1. 📲 Download Alipay.
2. 📞 Register with your phone number.
3. 💳 Link your bank card or top up with cash.
4. 📷 Scan QR codes to pay in stores or transfer money to friends.
5. ✈️ Use the "Travel" section to buy tickets or access tourist services.

**💡 Tips:**
- Alipay has a "Tour Pass" for foreign visitors allowing temporary usage with foreign cards.  

---

## 🚗 5. Didi Chuxing (滴滴出行) – Taxi & Ride-Hailing
**Purpose:** Booking taxis, private cars, and even bike rentals.  

**Steps to Use:**
1. 📲 Download Didi Chuxing.
2. ✅ Register and verify your phone number.
3. 📍 Input pickup and drop-off locations.
4. 🚕 Choose the type of ride: Express, Premier, or Taxi.
5. 💳 Confirm and pay (WeChat Pay, Alipay, or foreign card in some cities).

**💡 Tips:**
- Didi offers English interface for travelers.  
- Check traffic and surge prices before ordering.

---

## 🍜 6. Meituan / Ele.me (美团 / 饿了么) – Food Delivery
**Purpose:** Order meals, groceries, and more.  

**Steps to Use:**
1. 📲 Download Meituan or Ele.me.
2. 📝 Register your account.
3. 🏠 Set your delivery address.
4. 🛒 Browse restaurants and add items to your cart.
5. 💳 Checkout and pay (WeChat Pay or Alipay).

**💡 Tips:**
- Many restaurants have English menus on Meituan.  
- Check delivery fees and minimum order amounts.

---

## 🗺️ 7. Amap / Gaode Maps (高德地图) – Navigation & Transit
**Purpose:** Maps, directions, public transport, and POIs.  

**Steps to Use:**
1. 📲 Download Amap (Gaode Maps) from the App Store or Google Play.
2. 📍 Allow location access.
3. 🔍 Search for destinations in English or Pinyin.
4. 🚶‍♂️ Choose walking, driving, or public transport routes.
5. 🧭 Follow navigation and estimated arrival times.

**💡 Tips:**
- Amap is more accurate than Google Maps in China for local navigation.  
- Some menus may only be in Chinese; use translation apps if needed.

---

## Essential Chinese Phrases for Apps

| English | Chinese | Pinyin |
|---------|--------|--------|
| WeChat | 微信 | Wēixìn |
| Xiaohongshu / RED / RedNote | 小红书 | Xiǎohóngshū |
| Douyin | 抖音 | Dǒuyīn |
| Alipay | 支付宝 | Zhīfùbǎo |
| Didi | 滴滴出行 | Dīdī chūxíng |
| Meituan | 美团 | Měituán |
| Ele.me | 饿了么 | Èle.me |
| Amap / Gaode Maps | 高德地图 | Gāodé Dìtú |
| QR code | 二维码 | èrwéimǎ |
| Payment | 支付 | zhīfù |
| Friend | 朋友 | péngyǒu |
| Address | 地址 | dìzhǐ |

> Tip: Copy or screenshot these phrases on your phone for easy reference.

---

## 💡 Quick Tips for Using Chinese Apps

- **📱 Phone verification:** Most apps require phone number verification. Make sure your SIM works in China.
- **📷 QR codes everywhere:** Scan to pay, add contacts, or check in.
- **🌐 Language barriers:** Many apps have English versions, but some menus are only in Chinese. Use translation features or copy-paste text into Google Translate.
- **📶 Internet access:** Some apps require mobile data; a local SIM or eSIM works best.
- **💳 Payment setup:** Link your cards early to avoid payment issues when you need them most.
- **🔄 App updates:** Keep apps updated for the latest features and security patches.

---

## Conclusion

WeChat, Xiaohongshu / RED / RedNote, and Douyin for communication, social discovery, and entertainment; Alipay for payments; Didi for transportation; Meituan/Ele.me for food delivery; Amap (Gaode Maps) for navigation. Mastering these apps will make your travel in China smooth and convenient.`
  },
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

export const categories = ['All', 'Transportation', 'Technology']

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(guide => guide.slug === slug)
}
