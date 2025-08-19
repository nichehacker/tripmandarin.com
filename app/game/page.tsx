'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Volume2, Users, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

type GameStage =
  | 'welcome'
  | 'seating'
  | 'menu'
  | 'ordering'
  | 'confirmation'
  | 'payment'
  | 'complete'

interface MenuItem {
  id: string
  chinese: string
  pinyin: string
  english: string
  price: number
  category: 'main' | 'side' | 'drink'
}

const menuItems: MenuItem[] = [
  {
    id: '1',
    chinese: '宫保鸡丁',
    pinyin: 'Gōngbǎo jīdīng',
    english: 'Kung Pao Chicken',
    price: 38,
    category: 'main'
  },
  {
    id: '2',
    chinese: '麻婆豆腐',
    pinyin: 'Mápó dòufu',
    english: 'Mapo Tofu',
    price: 28,
    category: 'main'
  },
  {
    id: '3',
    chinese: '糖醋里脊',
    pinyin: 'Tángcù lǐjǐ',
    english: 'Sweet and Sour Pork',
    price: 42,
    category: 'main'
  },
  { id: '4', chinese: '饺子', pinyin: 'Jiǎozi', english: 'Dumplings', price: 25, category: 'side' },
  { id: '5', chinese: '米饭', pinyin: 'Mǐfàn', english: 'Rice', price: 8, category: 'side' },
  {
    id: '6',
    chinese: '青岛啤酒',
    pinyin: 'Qīngdǎo píjiǔ',
    english: 'Tsingtao Beer',
    price: 15,
    category: 'drink'
  },
  { id: '7', chinese: '茶', pinyin: 'Chá', english: 'Tea', price: 10, category: 'drink' }
]

export default function RestaurantGame() {
  const [gameStage, setGameStage] = useState<GameStage>('welcome')
  const [selectedItems, setSelectedItems] = useState<MenuItem[]>([])
  const [partySize, setPartySize] = useState<number>(1)
  const [score, setScore] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const playAudio = (text: string) => {
    console.log('[v0] Attempting to play audio:', text)

    if (isPlaying) {
      console.log('[v0] Audio already playing, skipping')
      return
    }

    if (!('speechSynthesis' in window)) {
      console.log('[v0] Speech synthesis not supported')
      return
    }

    speechSynthesis.cancel()
    setIsPlaying(true)

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'zh-CN'
    utterance.rate = 0.8
    utterance.pitch = 1.0
    utterance.volume = 1.0

    utterance.onstart = () => {
      console.log('[v0] Speech started:', text)
    }

    utterance.onend = () => {
      console.log('[v0] Speech ended:', text)
      setIsPlaying(false)
    }

    utterance.onerror = event => {
      console.log('[v0] Speech error:', event.error)
      setIsPlaying(false)
    }

    speechSynthesis.speak(utterance)
  }

  const addToOrder = (item: MenuItem) => {
    setSelectedItems([...selectedItems, item])
    setScore(score + 10)
    if (!isPlaying) {
      playAudio(item.chinese)
    }
  }

  const removeFromOrder = (itemId: string) => {
    setSelectedItems(selectedItems.filter(item => item.id !== itemId))
  }

  const getTotalPrice = () => {
    return selectedItems.reduce((total, item) => total + item.price, 0)
  }

  const renderWelcome = () => (
    <div className="text-center space-y-6">
      <div className="text-6xl mb-4">🏮</div>
      <h2 className="text-3xl font-bold text-red-600">欢迎光临中餐厅！</h2>
      <p className="text-lg text-gray-600">Welcome to the Chinese Restaurant!</p>
      <p className="text-sm text-gray-500">
        Practice ordering food in Chinese through an interactive restaurant experience
      </p>
      <Button onClick={() => setGameStage('seating')} className="bg-red-600 hover:bg-red-700">
        进入餐厅 Enter Restaurant
      </Button>
    </div>
  )

  const renderSeating = () => (
    <div className="space-y-6">
      <div className="flex gap-4 items-start">
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          <img
            src="/placeholder.svg?height=64&width=64"
            alt="Waiter"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="bg-blue-100 rounded-2xl rounded-tl-sm p-4 relative">
            <div className="absolute -left-2 top-4 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-blue-100"></div>
            <p className="text-lg font-medium mb-2">服务员说：</p>
            <p className="text-xl text-red-600 mb-1">欢迎光临，请问几位？</p>
            <p className="text-sm text-gray-600 mb-1">Huānyíng guānglín, qǐngwèn jǐ wèi?</p>
            <p className="text-sm text-gray-500 mb-3">Welcome! How many people?</p>
            <Button variant="outline" size="sm" onClick={() => playAudio('欢迎光临，请问几位？')}>
              <Volume2 className="h-4 w-4 mr-1" />
              Play Audio
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button
          variant={partySize === 1 ? 'default' : 'outline'}
          onClick={() => {
            setPartySize(1)
            playAudio('一位')
            setTimeout(() => setGameStage('menu'), 2500)
          }}
          className="p-6 h-auto flex-col"
        >
          <Users className="h-6 w-6 mb-2" />
          <span className="text-lg">一位</span>
          <span className="text-sm text-gray-600">Yí wèi</span>
          <span className="text-xs text-gray-500">One person</span>
        </Button>

        <Button
          variant={partySize === 2 ? 'default' : 'outline'}
          onClick={() => {
            setPartySize(2)
            playAudio('两位')
            setTimeout(() => setGameStage('menu'), 2500)
          }}
          className="p-6 h-auto flex-col"
        >
          <Users className="h-6 w-6 mb-2" />
          <span className="text-lg">两位</span>
          <span className="text-sm text-gray-600">Liǎng wèi</span>
          <span className="text-xs text-gray-500">Two people</span>
        </Button>
      </div>
    </div>
  )

  const renderMenu = () => (
    <div className="space-y-6">
      <div className="flex gap-4 items-start">
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          <img
            src="/placeholder.svg?height=64&width=64"
            alt="Waiter"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="bg-blue-100 rounded-2xl rounded-tl-sm p-4 relative">
            <div className="absolute -left-2 top-4 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-blue-100"></div>
            <p className="text-lg font-medium mb-2">服务员说：</p>
            <p className="text-xl text-red-600 mb-1">请看菜单，要点什么？</p>
            <p className="text-sm text-gray-600 mb-1">Qǐng kàn càidān, yào diǎn shénme?</p>
            <p className="text-sm text-gray-500 mb-3">
              Please look at the menu, what would you like to order?
            </p>
            <Button variant="outline" size="sm" onClick={() => playAudio('请看菜单，要点什么？')}>
              <Volume2 className="h-4 w-4 mr-1" />
              Play Audio
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-2">
        <h3 className="text-lg font-semibold text-red-600">主菜 Main Dishes</h3>
        {menuItems
          .filter(item => item.category === 'main')
          .map(item => (
            <Card key={item.id} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-3">
                <div className="flex gap-4 items-center">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={`/placeholder.svg?height=80&width=80&query=${encodeURIComponent(
                        item.english + ' Chinese dish'
                      )}`}
                      alt={item.english}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex justify-between items-center flex-1">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-medium">{item.chinese}</h4>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={e => {
                            e.stopPropagation()
                            playAudio(item.chinese)
                          }}
                          className="p-1 h-auto"
                        >
                          <Volume2 className="h-3 w-3" />
                        </Button>
                      </div>
                      <p className="text-sm text-gray-600">{item.pinyin}</p>
                      <p className="text-sm text-gray-500">{item.english}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">¥{item.price}</p>
                      <p className="text-sm text-gray-600">${(item.price / 7).toFixed(2)}</p>
                      <Button size="sm" onClick={() => addToOrder(item)} className="mt-1">
                        点菜 Order
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

        <h3 className="text-lg font-semibold text-red-600 mt-4">配菜 Side Dishes</h3>
        {menuItems
          .filter(item => item.category === 'side')
          .map(item => (
            <Card key={item.id} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-3">
                <div className="flex gap-4 items-center">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={`/placeholder.svg?height=80&width=80&query=${encodeURIComponent(
                        item.english + ' Chinese food'
                      )}`}
                      alt={item.english}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex justify-between items-center flex-1">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-medium">{item.chinese}</h4>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={e => {
                            e.stopPropagation()
                            playAudio(item.chinese)
                          }}
                          className="p-1 h-auto"
                        >
                          <Volume2 className="h-3 w-3" />
                        </Button>
                      </div>
                      <p className="text-sm text-gray-600">{item.pinyin}</p>
                      <p className="text-sm text-gray-500">{item.english}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">¥{item.price}</p>
                      <p className="text-sm text-gray-600">${(item.price / 7).toFixed(2)}</p>
                      <Button size="sm" onClick={() => addToOrder(item)} className="mt-1">
                        点菜 Order
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

        <h3 className="text-lg font-semibold text-red-600 mt-4">饮料 Drinks</h3>
        {menuItems
          .filter(item => item.category === 'drink')
          .map(item => (
            <Card key={item.id} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-3">
                <div className="flex gap-4 items-center">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={`/placeholder.svg?height=80&width=80&query=${encodeURIComponent(
                        item.english + ' Chinese beverage'
                      )}`}
                      alt={item.english}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex justify-between items-center flex-1">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-medium">{item.chinese}</h4>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={e => {
                            e.stopPropagation()
                            playAudio(item.chinese)
                          }}
                          className="p-1 h-auto"
                        >
                          <Volume2 className="h-3 w-3" />
                        </Button>
                      </div>
                      <p className="text-sm text-gray-600">{item.pinyin}</p>
                      <p className="text-sm text-gray-500">{item.english}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">¥{item.price}</p>
                      <p className="text-sm text-gray-600">${(item.price / 7).toFixed(2)}</p>
                      <Button size="sm" onClick={() => addToOrder(item)} className="mt-1">
                        点菜 Order
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>

      {selectedItems.length > 0 && (
        <div className="fixed bottom-4 right-4">
          <Button
            onClick={() => setGameStage('confirmation')}
            className="bg-red-600 hover:bg-red-700"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            确认订单 ({selectedItems.length})
          </Button>
        </div>
      )}
    </div>
  )

  const renderConfirmation = () => (
    <div className="space-y-6">
      <div className="flex gap-4 items-start">
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          <img
            src="/placeholder.svg?height=64&width=64"
            alt="Waiter"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="bg-blue-100 rounded-2xl rounded-tl-sm p-4 relative">
            <div className="absolute -left-2 top-4 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-blue-100"></div>
            <p className="text-lg font-medium mb-2">服务员说：</p>
            <p className="text-xl text-red-600 mb-1">您要的菜是：</p>
            <div className="mt-2 mb-2">
              {selectedItems.map((item, index) => (
                <span key={index} className="text-lg">
                  {item.chinese}
                  {index < selectedItems.length - 1 ? '、' : ''}
                </span>
              ))}
            </div>
            <p className="text-xl text-red-600 mb-1">还要别的吗？</p>
            <p className="text-sm text-gray-600 mb-1">Nín yào de cài shì... Hái yào bié de ma?</p>
            <p className="text-sm text-gray-500 mb-3">
              Your order is... Do you want anything else?
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const orderText = selectedItems.map(item => item.chinese).join('、')
                playAudio(`您要的菜是：${orderText}。还要别的吗？`)
              }}
            >
              <Volume2 className="h-4 w-4 mr-1" />
              Play Audio
            </Button>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>您的订单 Your Order</CardTitle>
        </CardHeader>
        <CardContent>
          {selectedItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 border-b last:border-b-0"
            >
              <div>
                <span className="font-medium">{item.chinese}</span>
                <span className="text-sm text-gray-600 ml-2">{item.english}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>¥{item.price}</span>
                <span className="text-sm text-gray-600">${(item.price / 7).toFixed(2)}</span>
                <Button variant="outline" size="sm" onClick={() => removeFromOrder(item.id)}>
                  删除
                </Button>
              </div>
            </div>
          ))}
          <div className="pt-4 text-right">
            <p className="text-xl font-bold">总计 Total: ¥{getTotalPrice()}</p>
            <p className="text-lg text-gray-600">${(getTotalPrice() / 7).toFixed(2)} USD</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" onClick={() => setGameStage('menu')}>
          再加一个菜
          <br />
          <span className="text-sm">Zài jiā yí gè cài</span>
          <br />
          <span className="text-xs text-gray-500">Add more dishes</span>
        </Button>

        <Button
          onClick={() => {
            if (!isPlaying) {
              playAudio('不要了，谢谢')
            }
            setGameStage('payment')
          }}
          className="bg-red-600 hover:bg-red-700"
        >
          不要了，谢谢
          <br />
          <span className="text-sm">Bú yào le, xièxiè</span>
          <br />
          <span className="text-xs">That's all, thanks</span>
        </Button>
      </div>
    </div>
  )

  const renderPayment = () => (
    <div className="space-y-6 text-center">
      <div className="flex gap-4 items-start justify-center">
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          <img
            src="/placeholder.svg?height=64&width=64"
            alt="Waiter"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 max-w-md">
          <div className="bg-blue-100 rounded-2xl rounded-tl-sm p-4 relative">
            <div className="absolute -left-2 top-4 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-blue-100"></div>
            <p className="text-lg font-medium mb-2">服务员说：</p>
            <p className="text-xl text-red-600 mb-1">买单，谢谢！</p>
            <p className="text-sm text-gray-600 mb-1">Mǎidān, xièxiè!</p>
            <p className="text-sm text-gray-500 mb-3">The bill, please!</p>
            <Button variant="outline" size="sm" onClick={() => playAudio('买单，谢谢！')}>
              <Volume2 className="h-4 w-4 mr-1" />
              Play Audio
            </Button>
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="text-4xl mb-4">💰</div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>账单 Bill</CardTitle>
        </CardHeader>
        <CardContent>
          {selectedItems.map((item, index) => (
            <div key={index} className="flex justify-between py-1">
              <span>
                {item.chinese} {item.english}
              </span>
              <span>¥{item.price}</span>
            </div>
          ))}
          <div className="border-t pt-2 mt-2">
            <div className="flex justify-between font-bold text-lg">
              <span>总计 Total:</span>
              <div className="text-right">
                <div>¥{getTotalPrice()}</div>
                <div className="text-sm text-gray-600">${(getTotalPrice() / 7).toFixed(2)} USD</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button
        onClick={() => setGameStage('complete')}
        className="bg-red-600 hover:bg-red-700 text-lg px-8 py-3"
      >
        付款 Pay Now
      </Button>
    </div>
  )

  const renderComplete = () => (
    <div className="text-center space-y-6">
      <div className="text-6xl mb-4">🎉</div>
      <h2 className="text-3xl font-bold text-red-600">恭喜！游戏完成</h2>
      <p className="text-lg text-gray-600">Congratulations! Game Complete</p>

      <Card>
        <CardHeader>
          <CardTitle>学习成果 Learning Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p>点菜数量 Dishes Ordered: {selectedItems.length}</p>
            <p>学习得分 Learning Score: {score}</p>
            <p>总消费 Total Spent: ¥{getTotalPrice()}</p>
            <p className="text-sm text-gray-600">${(getTotalPrice() / 7).toFixed(2)} USD</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Button
          variant="outline"
          onClick={() => {
            setGameStage('welcome')
            setSelectedItems([])
            setScore(0)
            setPartySize(1)
          }}
        >
          再玩一次 Play Again
        </Button>

        <Button asChild>
          <Link href="/courses">继续学习 Continue Learning</Link>
        </Button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Header */}
      <div className="bg-card border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-red-600">中餐厅游戏</h1>
              <p className="text-sm text-gray-600">Chinese Restaurant Game</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Score: {score}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Game Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {gameStage === 'welcome' && renderWelcome()}
        {gameStage === 'seating' && renderSeating()}
        {gameStage === 'menu' && renderMenu()}
        {gameStage === 'confirmation' && renderConfirmation()}
        {gameStage === 'payment' && renderPayment()}
        {gameStage === 'complete' && renderComplete()}
      </div>
    </div>
  )
}
