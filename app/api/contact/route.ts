import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json()

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "All fields are required." },
                { status: 400 }
            )
        }

        // Create SMTP transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false, // STARTTLS on port 587
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        })

        // Send the email
        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
            replyTo: email,
            to: process.env.SMTP_USER,
            subject: `Portfolio Contact: ${name}`,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nouveau message depuis le portfolio</h2>
          <hr style="border: none; border-top: 1px solid #eee;" />
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message :</strong></p>
          <div style="background: #f9f9f9; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${message}</div>
        </div>
      `,
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("Contact email error:", error)
        return NextResponse.json(
            { error: "Failed to send email." },
            { status: 500 }
        )
    }
}
