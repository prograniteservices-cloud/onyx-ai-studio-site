import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, "project-type": projectType, budget, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.INFOMANIAK_SMTP_HOST,
      port: Number(process.env.INFOMANIAK_SMTP_PORT),
      secure: true, // Use SSL/TLS
      auth: {
        user: process.env.INFOMANIAK_EMAIL,
        pass: process.env.INFOMANIAK_TOKEN,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.INFOMANIAK_EMAIL}>`, // Must be from the authenticated user
      replyTo: email,
      to: process.env.INFOMANIAK_EMAIL,
      subject: `New Lead: ${projectType} from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Project Type: ${projectType}
        Budget: ${budget}
        Message: ${message}
      `,
      html: `
        <h2>New Lead from Onyx AI Studio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact Form Error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
