import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const fromAddress = 'Require Technologies <onboarding@resend.dev>'
    const toEmail = 'cxxx2500@gmail.com'

    if (!resendApiKey) {
      console.error('RESEND_API_KEY not found in environment variables')
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
    }

    const resend = new Resend(resendApiKey)

    const subject = `New contact form submission from ${name}`

    const htmlBody = `
      <table width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial, Helvetica, sans-serif; background:#0b0b0b; padding:24px; color:#ffffff;">
        <tr>
          <td>
            <h1 style="margin:0 0 16px; font-size:20px;">Require Technologies - Contact Form</h1>
            <div style="background:#141414; border:1px solid #222; border-radius:8px; padding:16px;">
              <p style="margin:0 0 8px;"><strong>Name:</strong> ${name}</p>
              <p style="margin:0 0 8px;"><strong>Email:</strong> ${email}</p>
              <p style="margin:0 0 8px;"><strong>Message:</strong></p>
              <p style="white-space:pre-wrap; margin:0;">${message}</p>
            </div>
          </td>
        </tr>
      </table>
    `

    console.log('Sending email to:', toEmail)
    console.log('From:', fromAddress)
    console.log('Subject:', subject)
    
    const result1 = await resend.emails.send({
      from: fromAddress,
      to: toEmail,
      reply_to: email,
      subject,
      html: htmlBody,
    })
    
    console.log('Contact email result:', JSON.stringify(result1, null, 2))

    const autoReplyHtml = `
      <table width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial, Helvetica, sans-serif; background:#0b0b0b; padding:24px; color:#ffffff;">
        <tr>
          <td>
            <h1 style="margin:0 0 12px; font-size:20px;">Require Technologies Limited</h1>
            <p style="margin:0 0 16px; color:#cbd5e1;">Thank you for contacting us, ${name}.</p>
            <div style="background:#141414; border:1px solid #222; border-radius:8px; padding:16px;">
              <p style="margin:0 0 12px;">We’ve received your message and our team will get back to you shortly.</p>
              <p style="margin:0 0 0;">Regards,<br/>Require Technologies Team</p>
            </div>
            <p style="margin-top:16px; color:#94a3b8; font-size:12px;">Website: requiretechnologies.com • Email: info@requiretechnologies.com • Lagos, Nigeria</p>
          </td>
        </tr>
      </table>
    `

    console.log('Sending auto-reply to:', email)
    
    const result2 = await resend.emails.send({
      from: fromAddress,
      to: email,
      subject: 'We received your message',
      html: autoReplyHtml,
    })
    
    console.log('Auto-reply result:', JSON.stringify(result2, null, 2))

    return NextResponse.json({ ok: true })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('Contact API error:', message)
    return NextResponse.json({ 
      error: 'Failed to send email', 
      details: process.env.NODE_ENV === 'development' ? message : undefined 
    }, { status: 500 })
  }
}


