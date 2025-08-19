import type React from 'react'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'TripMandarin - Learn Mandarin Chinese for Travelers | China Travel Phrases',
  description:
    'Learn essential Mandarin Chinese phrases for China travel. Master Chinese for travelers with interactive lessons covering taxi, restaurant, hotel, and shopping scenarios. Perfect for foreign tourists visiting China.',
  keywords: [
    'Learn Mandarin',
    'Chinese for Travelers',
    'China Travel Phrases',
    'Learn Chinese',
    'Mandarin lessons',
    'Chinese pronunciation',
    'Travel Chinese',
    'China tourism',
    'Chinese language learning',
    'Mandarin for tourists'
  ],
  authors: [{ name: 'TripMandarin' }],
  creator: 'TripMandarin',
  publisher: 'TripMandarin',
  openGraph: {
    title: 'TripMandarin - Learn Chinese for China Travel',
    description:
      'Essential Mandarin phrases for foreign tourists visiting China. Learn Chinese for travelers in just 7 days.',
    type: 'website',
    locale: 'en_US',
    siteName: 'TripMandarin'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learn Mandarin Chinese for China Travel',
    description: 'Essential Chinese phrases for tourists visiting China'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: '/favicon.ico'
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {children}

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-KGGF424QQ5`}
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KGGF424QQ5', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Umami Analytics */}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="e8e27e17-6700-414d-8b63-24a92d73c745"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
