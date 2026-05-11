import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, phone, companyName, serviceType, message } = await req.json();

  try {
    await resend.emails.send({
      from: "OceanAxis Quotes <onboarding@resend.dev>", // swap with your verified domain later
      to: process.env.CONTACT_EMAIL!,
      subject: `New Quote Request — ${serviceType} from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 24px; background: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #0a0f1e;">📦 New Quote Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #555;">Name</td><td style="padding: 8px 0; font-weight: bold;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;">Email</td><td style="padding: 8px 0;">${email}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;">Phone</td><td style="padding: 8px 0;">${phone || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;">Company</td><td style="padding: 8px 0;">${companyName || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;">Service</td><td style="padding: 8px 0; color: #1d4ed8; font-weight: bold;">${serviceType}</td></tr>
          </table>
          <hr style="margin: 16px 0;" />
          <p style="color: #555;"><strong>Message:</strong></p>
          <p style="color: #333;">${message || "No message provided."}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quote email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}