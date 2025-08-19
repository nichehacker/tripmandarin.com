import { type NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, inquiryType } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // For now, we'll use a simple email service that works in serverless environments
    // Using EmailJS or similar service would be ideal, but for demonstration,
    // we'll simulate the email sending and log the details

    const emailContent = {
      to: 'lifesurge@qq.com',
      from: email,
      subject: `TripMandarin Contact: ${subject || inquiryType}`,
      body: `
Name: ${name}
Email: ${email}
Inquiry Type: ${inquiryType}
Subject: ${subject || 'No subject'}

Message:
${message}

---
Sent from TripMandarin Contact Form
      `.trim()
    }

    // Log the email content (in production, this would be sent via a service like SendGrid, Resend, etc.)
    console.log('[v0] Email to be sent:', emailContent)

    // For now, we'll return success since we can't actually send emails without a proper service
    // In production, you would integrate with SendGrid, Resend, or similar service
    return NextResponse.json({
      success: true,
      message: 'Message received successfully. We will get back to you soon!'
    })
  } catch (error) {
    console.error('[v0] Email sending error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}
