import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function TermsOfService() {
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
          <h1 className="text-3xl font-bold text-red-600 mb-6">Terms of Service</h1>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using TripMandarin ("the Service"), you accept and agree to be
                bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                2. Description of Service
              </h2>
              <p className="text-gray-700 mb-4">
                TripMandarin is an online platform that provides Chinese language learning resources
                specifically designed for travelers visiting China. Our service includes interactive
                lessons, pronunciation practice, cultural tips, and utility tools.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">3. User Responsibilities</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>
                  You are responsible for maintaining the confidentiality of your account
                  information
                </li>
                <li>You agree to use the service for lawful purposes only</li>
                <li>
                  You will not attempt to interfere with the proper functioning of the service
                </li>
                <li>
                  You will respect the intellectual property rights of TripMandarin and other users
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content, features, and functionality of TripMandarin, including but not limited
                to text, graphics, logos, and software, are owned by TripMandarin and are protected
                by copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Privacy</h2>
              <p className="text-gray-700 mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also
                governs your use of the Service, to understand our practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-gray-700 mb-4">
                TripMandarin shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages resulting from your use of the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these terms at any time. We will notify users of any
                material changes by posting the new terms on this page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us at
                1942821318@qq.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
