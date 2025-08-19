'use client'

import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <Image width={40} height={40} alt="TripMandarin Logo" src="/logo.png" />

            <span className="text-xl font-bold text-primary">TripMandarin</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="/courses" className="text-sm font-medium hover:text-primary transition-colors">
              Courses
            </a>
            <a
              href="/practice"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Practice
            </a>
            <a href="/quiz" className="text-sm font-medium hover:text-primary transition-colors">
              Quiz
            </a>
            <a
              href="/cheat-sheet"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Cheat Sheet
            </a>
            <a href="/tools" className="text-sm font-medium hover:text-primary transition-colors">
              Tools
            </a>
            <Button size="sm" asChild>
              <a href="/courses">Start Learning</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/40">
            <nav className="flex flex-col gap-4">
              <a
                href="/courses"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Courses
              </a>
              <a
                href="/practice"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Practice
              </a>
              <a href="/quiz" className="text-sm font-medium hover:text-primary transition-colors">
                Quiz
              </a>
              <a
                href="/cheat-sheet"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Cheat Sheet
              </a>
              <a href="/tools" className="text-sm font-medium hover:text-primary transition-colors">
                Tools
              </a>
              <Button size="sm" className="w-fit" asChild>
                <a href="/courses">Start Learning</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
