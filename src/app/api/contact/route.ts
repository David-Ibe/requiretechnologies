import { NextRequest, NextResponse } from 'next/server'
import { Resend } from '@resend/node'

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const sendingDomain = process.env.RESEND_DOMAIN || 'requiretechnologies.com'
    const fromAddress = `Require Technologies <noreply@${sendingDomain}>`
    const toPrimary = 'info@requiretechnologies.com'
    const toSecondary = 'cxxx2500@gmail.com'

    if (!resendApiKey) {
      return NextResponse.json({ error: 'Email is not configured' }, { status: 500 })
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

    await resend.emails.send({
      from: fromAddress,
      to: [toPrimary, toSecondary],
      reply_to: email,
      subject,
      html: htmlBody,
    })

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

    await resend.emails.send({
      from: fromAddress,
      to: email,
      subject: 'We received your message',
      html: autoReplyHtml,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact API error', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}


