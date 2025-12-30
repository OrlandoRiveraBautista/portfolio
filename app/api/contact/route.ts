import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (
      !process.env.EMAIL_HOST ||
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASSWORD
    ) {
      console.error("Missing email configuration in environment variables");
      return NextResponse.json(
        { error: "Email service is not configured properly" },
        { status: 500 }
      );
    }

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || "587"),
      secure: process.env.EMAIL_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email to you (notification)
    const mailOptionsToYou = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `✨ New Message from ${name} | Portfolio Contact`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #0a0a0b 0%, #18181b 100%); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;">
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td align="center" style="padding: 40px 20px;">
                <!-- Main Container -->
                <table role="presentation" style="max-width: 600px; width: 100%; background: #111113; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 100px rgba(139, 92, 246, 0.15);">
                  
                  <!-- Header with Gradient -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%); padding: 40px 30px; text-align: center; position: relative;">
                      <div style="background: radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 60%); position: absolute; top: 0; left: 0; right: 0; bottom: 0;"></div>
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; position: relative; text-shadow: 0 2px 10px rgba(0,0,0,0.2);">
                        ✨ New Contact Message
                      </h1>
                      <p style="margin: 8px 0 0; color: rgba(255,255,255,0.95); font-size: 14px; position: relative;">
                        Someone wants to connect with you!
                      </p>
                    </td>
                  </tr>

                  <!-- Content Area -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      
                      <!-- Sender Info Card -->
                      <table role="presentation" style="width: 100%; background: #18181b; border-radius: 16px; border: 1px solid rgba(139, 92, 246, 0.2); overflow: hidden; margin-bottom: 24px;">
                        <tr>
                          <td style="padding: 24px;">
                            <table role="presentation" style="width: 100%;">
                              <tr>
                                <td style="width: 66px; vertical-align: middle;">
                                  <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3); text-align: center; line-height: 50px;">
                                    <span style="color: white; font-size: 24px; font-weight: 700; display: block; text-align: center; width: 100%;">${name
                                      .charAt(0)
                                      .toUpperCase()}</span>
                                  </div>
                                </td>
                                <td style="vertical-align: middle;">
                                  <h2 style="margin: 0; color: #fafafa; font-size: 20px; font-weight: 600;">${name}</h2>
                                  <a href="mailto:${email}" style="color: #a78bfa; text-decoration: none; font-size: 14px; margin-top: 4px; display: block;">
                                    ${email}
                                  </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>

                      <!-- Message Content -->
                      <table role="presentation" style="width: 100%; background: linear-gradient(135deg, rgba(139, 92, 246, 0.03) 0%, #0a0a0b 50%); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; overflow: hidden;">
                        <tr>
                          <td style="padding: 24px;">
                            <h3 style="margin: 0 0 16px; color: #a1a1aa; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                              📝 Message
                            </h3>
                            
                            <div style="color: #fafafa; font-size: 15px; line-height: 1.7;">
                              ${message.replace(/\n/g, "<br>")}
                            </div>
                          </td>
                        </tr>
                      </table>

                      <!-- Quick Actions -->
                      <table role="presentation" style="width: 100%; margin-top: 32px;">
                        <tr>
                          <td align="center">
                            <a href="mailto:${email}?subject=Re: Your message from my portfolio" style="display: inline-block; background: linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 12px; font-weight: 600; font-size: 14px; box-shadow: 0 4px 16px rgba(139, 92, 246, 0.4); transition: all 0.3s;">
                              Reply to ${name.split(" ")[0]} →
                            </a>
                          </td>
                        </tr>
                      </table>

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding: 24px 30px; background: #0a0a0b; border-top: 1px solid rgba(255, 255, 255, 0.08);">
                      <p style="margin: 0; color: #71717a; font-size: 12px; text-align: center; line-height: 1.6;">
                        This message was sent via your portfolio contact form<br>
                        <span style="color: #a1a1aa;">Portfolio © ${new Date().getFullYear()}</span>
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      text: `
✨ NEW CONTACT MESSAGE

From: ${name}
Email: ${email}

MESSAGE:
${message}

---
Reply to: ${email}
This email was sent from your portfolio contact form.
      `,
    };

    // Optional: Auto-reply to the sender
    const mailOptionsToSender = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: email,
      subject: "Thanks for reaching out! 👋",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #0a0a0b 0%, #18181b 100%); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;">
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td align="center" style="padding: 40px 20px;">
                <!-- Main Container -->
                <table role="presentation" style="max-width: 600px; width: 100%; background: #111113; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 100px rgba(139, 92, 246, 0.15);">
                  
                  <!-- Header with Gradient -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%); padding: 50px 30px; text-align: center; position: relative;">
                      <div style="background: radial-gradient(circle at 70% 30%, rgba(255,255,255,0.15) 0%, transparent 60%); position: absolute; top: 0; left: 0; right: 0; bottom: 0;"></div>
                      <div style="font-size: 48px; margin-bottom: 16px;">👋</div>
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; position: relative; text-shadow: 0 2px 10px rgba(0,0,0,0.2);">
                        Message Received!
                      </h1>
                      <p style="margin: 8px 0 0; color: rgba(255,255,255,0.95); font-size: 14px; position: relative;">
                        I'll get back to you soon
                      </p>
                    </td>
                  </tr>

                  <!-- Content Area -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      
                      <!-- Greeting -->
                      <h2 style="margin: 0 0 16px; color: #fafafa; font-size: 22px; font-weight: 600;">
                        Hi ${name}! 
                      </h2>
                      
                      <p style="margin: 0 0 24px; color: #a1a1aa; font-size: 15px; line-height: 1.7;">
                        Thanks for reaching out through my portfolio. I've received your message and really appreciate you taking the time to connect!
                      </p>

                      <!-- Message Recap -->
                      <div style="background: #0a0a0b; border: 1px solid rgba(139, 92, 246, 0.2); border-radius: 16px; padding: 24px; margin: 24px 0; position: relative; overflow: hidden;">
                        <div style="position: absolute; top: -30px; right: -30px; width: 100px; height: 100px; background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%);"></div>
                        
                        <h3 style="margin: 0 0 12px; color: #8b5cf6; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                          Your Message
                        </h3>
                        
                        <div style="color: #d4d4d8; font-size: 14px; line-height: 1.7; position: relative;">
                          ${message.replace(/\n/g, "<br>")}
                        </div>
                      </div>

                      <p style="margin: 24px 0 0; color: #a1a1aa; font-size: 15px; line-height: 1.7;">
                        I typically respond within <strong style="color: #8b5cf6;">24-48 hours</strong>. In the meantime, feel free to check out more of my work!
                      </p>

                      <!-- Signature -->
                      <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid rgba(255, 255, 255, 0.08);">
                        <p style="margin: 0; color: #fafafa; font-size: 16px; font-weight: 600;">
                          Best regards,
                        </p>
                        <p style="margin: 8px 0 0; background: linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-size: 20px; font-weight: 700;">
                          Orlando Rivera
                        </p>
                        <p style="margin: 4px 0 0; color: #71717a; font-size: 13px;">
                          Full Stack Developer
                        </p>
                      </div>

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding: 24px 30px; background: #0a0a0b; border-top: 1px solid rgba(255, 255, 255, 0.08);">
                      <table role="presentation" style="width: 100%;">
                        <tr>
                          <td align="center">
                            <p style="margin: 0 0 12px; color: #71717a; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">
                              Connect With Me
                            </p>
                            <div style="margin: 16px 0;">
                              <!-- Add your social links here if desired -->
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" style="padding-top: 16px;">
                            <p style="margin: 0; color: #52525b; font-size: 11px; line-height: 1.6;">
                              This is an automated confirmation. Please don't reply to this email.<br>
                              <span style="color: #3f3f46;">© ${new Date().getFullYear()} Orlando Rivera. All rights reserved.</span>
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      text: `
Hi ${name}! 👋

Thanks for reaching out through my portfolio. I've received your message and really appreciate you taking the time to connect!

YOUR MESSAGE:
${message}

I typically respond within 24-48 hours. In the meantime, feel free to check out more of my work!

Best regards,
Orlando Rivera
Full Stack Developer

---
This is an automated confirmation. Please don't reply to this email.
© ${new Date().getFullYear()} Orlando Rivera. All rights reserved.
      `,
    };

    // Send both emails
    await transporter.sendMail(mailOptionsToYou);

    // Send auto-reply (optional - remove if you don't want this)
    await transporter.sendMail(mailOptionsToSender);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
