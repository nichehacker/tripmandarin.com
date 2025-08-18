import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-muted py-12 px-4 border-t">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
            <Image
                width={40}
                height={40}
                alt="TripMandarin Logo"
                src="/logo.png" />
              <span className="text-xl font-bold text-primary">TripMandarin</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Making Chinese accessible for every traveler visiting China.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Learn</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/courses" className="text-muted-foreground hover:text-foreground">
                  Courses
                </a>
              </li>
              <li>
                <a href="/practice" className="text-muted-foreground hover:text-foreground">
                  Practice
                </a>
              </li>
              <li>
                <a href="/quiz" className="text-muted-foreground hover:text-foreground">
                  Quiz
                </a>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-semibold mb-4">Tools</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/tools/phrasebook" className="text-muted-foreground hover:text-foreground">
                  Phrasebook
                </a>
              </li>
              <li>
                <a href="/tools/emergency-card" className="text-muted-foreground hover:text-foreground">
                  Emergency Card
                </a>
              </li>
              <li>
                <a href="/tools/offline" className="text-muted-foreground hover:text-foreground">
                  Offline Mode
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 TripMandarin. All rights reserved. Learn Mandarin for China Travel.
          </p>
        </div>
      </div>
    </footer>
  )
}
