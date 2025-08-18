import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Brain, Mic, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function PracticePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Practice Tools</h1>
              <p className="text-muted-foreground">Interactive ways to master your Chinese phrases</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
            <Link href="/quiz">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Quick Quiz</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Test your knowledge with multiple choice questions covering all travel scenarios.
                </p>
              </CardContent>
            </Link>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
            <Link href="/practice/flashcards">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-2">
                  <MessageSquare className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Flashcards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Practice with interactive flashcards. Flip cards to test your memory and track progress.
                </p>
              </CardContent>
            </Link>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
            <Link href="/practice/pronunciation">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                  <Mic className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Pronunciation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Record yourself and compare with native pronunciation to improve your speaking.
                </p>
              </CardContent>
            </Link>
          </Card>
        </div>
      </main>
    </div>
  )
}
