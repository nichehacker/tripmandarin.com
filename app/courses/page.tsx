import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, Users } from "lucide-react"
import Link from "next/link"

export default function CoursesPage() {
  const scenarios = [
    {
      id: "taxi",
      icon: "🚕",
      title: "Taxi & Transportation",
      description: "Essential phrases for getting around China safely and efficiently",
      phrases: 10,
      duration: "5 min",
      difficulty: "Beginner",
      color: "bg-red-50 border-red-200",
    },
    {
      id: "restaurant",
      icon: "🍜",
      title: "Restaurant & Dining",
      description: "Order food, ask about ingredients, and navigate Chinese cuisine",
      phrases: 12,
      duration: "7 min",
      difficulty: "Beginner",
      color: "bg-orange-50 border-orange-200",
    },
    {
      id: "hotel",
      icon: "🏨",
      title: "Hotel & Accommodation",
      description: "Check-in, room service, and hotel facility conversations",
      phrases: 8,
      duration: "4 min",
      difficulty: "Beginner",
      color: "bg-blue-50 border-blue-200",
    },
    {
      id: "shopping",
      icon: "🛍️",
      title: "Shopping & Markets",
      description: "Bargain, ask prices, and make purchases confidently",
      phrases: 10,
      duration: "6 min",
      difficulty: "Beginner",
      color: "bg-green-50 border-green-200",
    },
    {
      id: "emergency",
      icon: "🚨",
      title: "Emergency Situations",
      description: "Critical phrases for medical emergencies and getting help",
      phrases: 6,
      duration: "3 min",
      difficulty: "Essential",
      color: "bg-red-50 border-red-200",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Travel Chinese Courses</h1>
              <p className="text-muted-foreground">Choose a scenario to start learning</p>
            </div>
          </div>
        </div>
      </header>

      {/* Course Grid */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((scenario) => (
            <Card
              key={scenario.id}
              className={`hover:shadow-lg transition-all cursor-pointer ${scenario.color}`}
              asChild
            >
              <Link href={`/courses/${scenario.id}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="text-4xl mb-2">{scenario.icon}</div>
                    <Badge variant="secondary">{scenario.difficulty}</Badge>
                  </div>
                  <CardTitle className="text-xl">{scenario.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{scenario.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {scenario.phrases} phrases
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {scenario.duration}
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* Progress Overview */}
        <div className="mt-12 p-6 bg-muted/30 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Your Learning Progress</h2>
          <div className="grid sm:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">0/5</div>
              <div className="text-sm text-muted-foreground">Scenarios Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">0/46</div>
              <div className="text-sm text-muted-foreground">Phrases Learned</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">0 min</div>
              <div className="text-sm text-muted-foreground">Time Spent Learning</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
