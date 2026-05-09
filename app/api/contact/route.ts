import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)  // 👈 moved inside

  try {
    const { name, email, company, service, message } = await req.json()

    await resend.emails.send({
      from: 'OceanAxis Contact <onboarding@resend.dev>',
      to: 'mahnoorijazahmad@gmail.com',
      subject: `New Quote Request from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a5f; border-bottom: 2px solid #1e3a5f; padding-bottom: 10px;">
            New Quote Request — OceanAxis
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #666; width: 140px;"><strong>Name</strong></td>
              <td style="padding: 10px 0; color: #1e3a5f;">${name}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 10px 0; color: #666;"><strong>Email</strong></td>
              <td style="padding: 10px 0; color: #1e3a5f;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666;"><strong>Company</strong></td>
              <td style="padding: 10px 0; color: #1e3a5f;">${company || 'Not provided'}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 10px 0; color: #666;"><strong>Service</strong></td>
              <td style="padding: 10px 0; color: #1e3a5f;">${service}</td>
            </tr>
            <tr>
              <td style="padding: 10px; color: #666; vertical-align: top;"><strong>Message</strong></td>
              <td style="padding: 10px 0; color: #1e3a5f;">${message}</td>
            </tr>
          </table>
          <p style="color: #999; font-size: 12px; margin-top: 30px;">
            Sent from OceanAxis contact form
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}