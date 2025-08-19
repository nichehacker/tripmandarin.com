'use client'

import type React from 'react'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Mail, MessageCircle, Globe, Clock } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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
          <h1 className="text-3xl font-bold text-red-600 mb-6">Contact Us</h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
              <p className="text-gray-700 mb-6">
                We'd love to hear from you! Whether you have questions about our Chinese learning
                platform, need technical support, or want to share feedback, we're here to help.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-red-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">support@tripmandarin.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <MessageCircle className="h-5 w-5 text-red-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">WeChat</p>
                    <p className="text-gray-600">TripMandarin_Official</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-red-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Website</p>
                    <p className="text-gray-600">www.tripmandarin.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-red-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Response Time</p>
                    <p className="text-gray-600">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Send us a Message</h2>

              {submitStatus === 'success' && (
                <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                  Message sent successfully! We'll get back to you within 24 hours.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  Failed to send message. Please try again or contact us directly.
                </div>
              )}

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800">How do I reset my progress?</h3>
                <p className="text-gray-600 text-sm mt-1">
                  You can reset your learning progress from the settings menu in your profile.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Can I use TripMandarin offline?</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Yes! Visit our offline tools section to download essential phrases for offline
                  use.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Is TripMandarin free to use?</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Yes, all basic features are completely free. We may introduce premium features in
                  the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
