'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Globe, Plane, Clock, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function TravelInfoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      {/* Header */}
      <div className="bg-card border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-2xl font-bold text-primary">China Travel Information</h1>
          <div></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <Globe className="h-6 w-6" />
              China Visa-Free & Transit Policies (August 2025)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-relaxed">
              As of August 2025, China's visa-free policies have been significantly expanded to
              cover multiple countries and regions, aiming to promote international exchange and
              tourism. Below is the latest summary of China's visa-free policies.
            </p>
          </CardContent>
        </Card>

        {/* Bilateral Visa-Exempt Agreement Countries */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <MapPin className="h-6 w-6" />
              Bilateral Visa-Exempt Agreement Countries (15 Countries)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              China has signed mutual visa-exempt agreements with the following countries, allowing
              their ordinary passport holders to enter China without a visa:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
              {[
                'Serbia',
                'Belarus',
                'United Arab Emirates',
                'Qatar',
                'Bahamas',
                'Mauritius',
                'San Marino',
                'South Korea (Jeju Island only)',
                'United States (Northern Mariana Islands - Saipan)',
                'United Kingdom (Turks and Caicos Islands)',
                'United Kingdom (South Georgia and the South Sandwich Islands)',
                'Samoa',
                'Haiti',
                'Singapore',
                'Israel (up to 90 days)'
              ].map((country, index) => (
                <div key={index} className="bg-red-50 px-3 py-2 rounded-md text-gray-700">
                  {country}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Unilateral Visa-Free Countries */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <Globe className="h-6 w-6" />
              Unilateral Visa-Free Countries (47 Countries)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              China grants unilateral visa-free entry to ordinary passport holders from the
              following countries, generally for up to 30 days.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Europe:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                  {[
                    'France',
                    'Germany',
                    'Italy',
                    'Spain',
                    'Netherlands',
                    'Belgium',
                    'Luxembourg',
                    'Switzerland',
                    'Ireland',
                    'Austria',
                    'Hungary',
                    'Poland',
                    'Portugal',
                    'Greece',
                    'Cyprus',
                    'Slovenia',
                    'Slovakia',
                    'Norway',
                    'Finland',
                    'Denmark',
                    'Iceland',
                    'Andorra',
                    'Monaco',
                    'Liechtenstein',
                    'United Kingdom',
                    'Russia',
                    'Bulgaria',
                    'Romania',
                    'Croatia',
                    'Montenegro',
                    'North Macedonia',
                    'Malta',
                    'Estonia',
                    'Latvia'
                  ].map((country, index) => (
                    <div key={index} className="bg-blue-50 px-2 py-1 rounded text-gray-700">
                      {country}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Asia & Oceania:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                  {['South Korea', 'Brunei', 'Japan', 'Malaysia', 'New Zealand', 'Australia'].map(
                    (country, index) => (
                      <div key={index} className="bg-green-50 px-2 py-1 rounded text-gray-700">
                        {country}
                      </div>
                    )
                  )}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Latin America:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                  {['Brazil', 'Argentina', 'Chile', 'Peru', 'Uruguay'].map((country, index) => (
                    <div key={index} className="bg-yellow-50 px-2 py-1 rounded text-gray-700">
                      {country}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Middle East:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                  {['Saudi Arabia', 'Oman', 'Kuwait', 'Bahrain'].map((country, index) => (
                    <div key={index} className="bg-purple-50 px-2 py-1 rounded text-gray-700">
                      {country}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 240-Hour Transit Policy */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <Clock className="h-6 w-6" />
              240-Hour (10-Day) Visa-Free Transit Policy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Effective June 12, 2025, China implemented a 240-hour (10-day) visa-free transit
              policy for citizens of 55 countries. Eligible travelers may stay up to 240 hours at
              designated ports for tourism, business, visits, or family reasons.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
              <p className="text-amber-800 font-medium">Important Requirements:</p>
              <ul className="text-amber-700 text-sm mt-2 space-y-1">
                <li>• Must hold valid international travel documents</li>
                <li>• Must have confirmed onward tickets to a third country</li>
                <li>• Work, study, and journalistic activities require prior approval</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <Plane className="h-6 w-6" />
              Important Notes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-gray-600">
              <div>
                <strong className="text-gray-800">Eligibility:</strong> Must hold a valid ordinary
                passport and visit China for purposes that comply with visa-free policies (business,
                tourism, family visits, exchanges, or transit).
              </div>
              <div>
                <strong className="text-gray-800">Duration:</strong> Visa-free stay starts from the
                day after entry; generally up to 30 consecutive days.
              </div>
              <div>
                <strong className="text-gray-800">Port of Entry:</strong> Applicable at all open
                land, air, and sea ports, unless otherwise restricted by law or bilateral
                arrangements.
              </div>
              <div>
                <strong className="text-gray-800">Non-Applicable Cases:</strong> Work, study, or
                journalistic activities are not eligible for visa-free entry.
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sources */}
        <Card>
          <CardHeader>
            <CardTitle className="text-gray-700">Official Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-blue-600">
              <a
                href="https://www.nia.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                • National Immigration Administration
              </a>
              <a
                href="https://www.visaforchina.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                • Visa Center
              </a>
              <a
                href="https://cs.mfa.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                • Chinese Consular Service
              </a>
              <a
                href="https://www.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                • Government Portal
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
