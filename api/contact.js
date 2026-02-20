import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { firstName, lastName, email, phone, budget, service, message } =
      req.body;

    if (!firstName || !email || !service) {
      return res.status(400).json({
        message: "Required fields missing",
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_PORT == 465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    /*
    ========================
    EMAIL TO YOU (ADMIN)
    ========================
    */

    await transporter.sendMail({
      from: `"Apexconstruct Website" <${process.env.EMAIL_USER}>`,
      to: "leroysmith@apexconstruct.org",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Request</h2>

        <p><strong>Name:</strong> ${firstName} ${lastName || ""}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
        <p><strong>Service:</strong> ${service}</p>

        <h3>Project Details</h3>
        <p>${message || "No message"}</p>
      `,
    });

    /*
    ========================
    AUTO REPLY TO USER
    ========================
    */

    await transporter.sendMail({
      from: `"Apexconstruct" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your message — Apexconstruct",
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6;">
          <h2 style="color:#f2b01e;">Thanks for contacting Apexconstruct</h2>

          <p>Hi ${firstName},</p>

          <p>
            We’ve received your request and our team will review your project details.
            Someone from our team will get back to you shortly.
          </p>

          <h3>Your Submission</h3>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Budget:</strong> ${budget || "Not specified"}</p>

          <br/>

          <p>
            If your request is urgent, you can reply to this email.
          </p>

          <br/>

          <p>
            — Apexconstruct Team
          </p>
        </div>
      `,
    });

    return res.status(200).json({
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to send message",
    });
  }
}
