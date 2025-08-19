import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      <div className="bg-card border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-red-600 mb-6">Privacy Policy</h1>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                1. Information We Collect
              </h2>
              <p className="text-gray-700 mb-4">
                We collect information you provide directly to us, such as when you create an
                account, use our learning features, or contact us for support.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Account information (email, username)</li>
                <li>Learning progress and preferences</li>
                <li>Audio recordings for pronunciation practice (processed locally)</li>
                <li>Usage data and analytics</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide and improve our language learning services</li>
                <li>Personalize your learning experience</li>
                <li>Track your progress and provide feedback</li>
                <li>Send you updates and educational content</li>
                <li>Respond to your questions and provide customer support</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Information Sharing</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third
                parties without your consent, except as described in this policy:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>With service providers who assist in operating our platform</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate security measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no
                method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Audio Data</h2>
              <p className="text-gray-700 mb-4">
                Audio recordings for pronunciation practice are processed locally on your device and
                are not stored on our servers unless you explicitly choose to save them for progress
                tracking.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Cookies and Tracking</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar technologies to enhance your experience, remember your
                preferences, and analyze usage patterns. You can control cookie settings through
                your browser.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Access and update your personal information</li>
                <li>Delete your account and associated data</li>
                <li>Opt out of marketing communications</li>
                <li>Request a copy of your data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Our service is not intended for children under 13. We do not knowingly collect
                personal information from children under 13.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                9. Changes to This Policy
              </h2>
              <p className="text-gray-700 mb-4">
                We may update this privacy policy from time to time. We will notify you of any
                changes by posting the new policy on this page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">10. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please contact us at
                1942821318@qq.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
