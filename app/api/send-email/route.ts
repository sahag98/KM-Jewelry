import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email to the business
    const { data, error } = await resend.emails.send({
      from: "KM Jewelry <website@kmjewelry.net>", // Update with your verified domain
      to: ["km.jewelryla@gmail.com"], // Update with your business email
      subject: `New Estimate Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Estimate Request</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Customer Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
          </div>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
            <h3 style="color: #555; margin-top: 0;">Project Details</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            This request was submitted from the KM Jewelry website.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    // Send confirmation email to the customer
    await resend.emails.send({
      from: "KM Jewelry <website@kmjewelry.net>", // Update with your verified domain
      to: [email],
      subject: "Thank you for your estimate request - KM Jewelry",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for your estimate request!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for contacting KM Jewelry. We have received your estimate request and will review your project details.</p>
          <p>Our team will get back to you within 24 hours with a detailed estimate for your jewelry project.</p>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Your Project Details</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p>If you have any questions in the meantime, please don't hesitate to contact us.</p>
          <p>Best regards,<br>The KM Jewelry Team</p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
