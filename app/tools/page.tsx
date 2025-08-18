import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, FileText, AlertTriangle, Download, Wifi } from "lucide-react"
import Link from "next/link"

export default function ToolsPage() {
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
              <h1 className="text-2xl font-bold">Travel Tools</h1>
              <p className="text-muted-foreground">Practical tools for your China trip</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
            <Link href="/tools/phrasebook">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Phrasebook Generator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Create a custom phrasebook with your most needed phrases. Download as PDF for offline use.
                </p>
              </CardContent>
            </Link>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
            <Link href="/tools/emergency-card">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-2">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Emergency Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Create emergency cards with your allergies and medical conditions in Chinese and English.
                </p>
              </CardContent>
            </Link>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
            <Link href="/tools/offline">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                  <Wifi className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Offline Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Save your most important phrases for offline access when you don't have internet.
                </p>
              </CardContent>
            </Link>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 p-6 bg-muted/30 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" asChild>
              <Link href="/tools/phrasebook">
                <Download className="h-4 w-4 mr-2" />
                Generate Phrasebook
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/tools/emergency-card">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Create Emergency Card
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
