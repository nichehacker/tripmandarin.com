"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plane, BookOpen, MessageCircle, Download, Play, Users } from "lucide-react"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Logo/Brand - smaller for left layout */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                <Plane className="h-6 w-6 text-primary" />
                <h1 className="text-xl md:text-2xl font-bold text-primary">TripMandarin</h1>
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Learn Mandarin Chinese
                <span className="block text-primary">for Travelers in 7 Days!</span>
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Essential China travel phrases for taxis, restaurants, and shopping. Master Chinese for travelers with
                our interactive lessons.
              </p>

              {/* Core Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6" asChild>
                  <a href="/courses">
                    <Play className="mr-2 h-5 w-5" />
                    Start Learning Mandarin
                  </a>
                </Button>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto text-lg px-6 py-6" asChild>
                  <a href="/tools/phrasebook">
                    <Download className="mr-2 h-5 w-5" />
                    Download Phrasebook
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Foreign tourist learning Chinese phrases for China travel"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <TryPhraseNow />
        </div>
      </section> */}

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose TripMandarin for Learning Chinese?</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">China Travel-Focused</h4>
                <p className="text-muted-foreground">
                  Learn only essential Chinese phrases for real travel situations: ordering food, taking taxis,
                  shopping, and emergencies in China.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Quick Mandarin Learning</h4>
                <p className="text-muted-foreground">
                  Master essential Chinese travel phrases in just 5 minutes per lesson. Perfect for busy travelers
                  preparing for China.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Chinese Cultural Tips</h4>
                <p className="text-muted-foreground">
                  Learn not just Mandarin phrases, but also Chinese cultural etiquette to help you navigate China with
                  confidence.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Chinese Pronunciation Practice</h4>
                <p className="text-muted-foreground">
                  Native Mandarin pronunciation with AI speech recognition feedback. Practice Chinese speaking and get
                  instant accuracy scores.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Travel Scenarios Preview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Learn Chinese by China Travel Scenario</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: "🚕", title: "Taxi Chinese", phrases: "10 phrases", href: "/courses/taxi" },
              { icon: "🍜", title: "Restaurant Chinese", phrases: "12 phrases", href: "/courses/restaurant" },
              { icon: "🏨", title: "Hotel Chinese", phrases: "8 phrases", href: "/courses/hotel" },
              { icon: "🛍️", title: "Shopping Chinese", phrases: "10 phrases", href: "/courses/shopping" },
              { icon: "🚨", title: "Emergency Chinese", phrases: "6 phrases", href: "/courses/emergency" },
            ].map((scenario, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer" asChild>
                <a href={scenario.href}>
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{scenario.icon}</div>
                    <h4 className="font-semibold mb-1">{scenario.title}</h4>
                    <p className="text-sm text-muted-foreground">{scenario.phrases}</p>
                  </CardContent>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Learning Chinese for Travel?</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of travelers who've successfully learned essential Mandarin phrases for China with
            TripMandarin.
          </p>
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <a href="/courses">
              <Play className="mr-2 h-5 w-5" />
              Start Learning Chinese Now - It's Free!
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
