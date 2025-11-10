import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ResponseData = {
  message: string;
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed', success: false });
  }

  const { name, email, subject, message, recaptchaToken } = req.body;

  // Validate input
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required', success: false });
  }

  if (!recaptchaToken) {
    return res.status(400).json({ message: 'reCAPTCHA token is required', success: false });
  }

  try {
    // Verify reCAPTCHA
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      }
    );

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return res.status(400).json({
        message: 'reCAPTCHA verification failed',
        success: false,
      });
    }

    // Create nodemailer transporter with Hostinger SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content with professional template
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_USER, // Send to your own email
      subject: `🌊 New Contact Form Submission: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 40px 20px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(25, 43, 57, 0.15);">
            
            <!-- Header with Logo and Gradient Background -->
            <tr>
              <td style="background: linear-gradient(135deg, #192B39 0%, #0c1821 100%); padding: 40px 30px; text-align: center; position: relative;">
                <div style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border-radius: 12px; padding: 20px; display: inline-block; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);">
                  <img src="cid:logo" alt="Ocean Edge Media" style="max-width: 200px; height: auto; display: block;" />
                </div>
                <h1 style="color: #ffffff; margin: 25px 0 0 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                  New Contact Form Submission
                </h1>
                <div style="height: 3px; width: 60px; background: linear-gradient(90deg, #06b6d4, #22d3ee); margin: 15px auto 0; border-radius: 2px;"></div>
              </td>
            </tr>
            
            <!-- Content Area -->
            <tr>
              <td style="padding: 40px 30px;">
                
                <!-- Contact Details Card -->
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
                  <tr>
                    <td style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border-left: 4px solid #06b6d4; border-radius: 8px; padding: 25px;">
                      
                      <!-- Name -->
                      <div style="margin-bottom: 20px;">
                        <div style="display: flex; align-items: center; margin-bottom: 8px;">
                          <span style="display: inline-block; width: 32px; height: 32px; background: linear-gradient(135deg, #06b6d4, #22d3ee); border-radius: 8px; text-align: center; line-height: 32px; margin-right: 12px;">
                            <span style="color: #ffffff; font-size: 16px;">👤</span>
                          </span>
                          <strong style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Name</strong>
                        </div>
                        <p style="margin: 0; color: #192B39; font-size: 16px; font-weight: 600; padding-left: 44px;">${name}</p>
                      </div>
                      
                      <!-- Email -->
                      <div style="margin-bottom: 20px;">
                        <div style="display: flex; align-items: center; margin-bottom: 8px;">
                          <span style="display: inline-block; width: 32px; height: 32px; background: linear-gradient(135deg, #06b6d4, #22d3ee); border-radius: 8px; text-align: center; line-height: 32px; margin-right: 12px;">
                            <span style="color: #ffffff; font-size: 16px;">📧</span>
                          </span>
                          <strong style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Email</strong>
                        </div>
                        <p style="margin: 0; padding-left: 44px;">
                          <a href="mailto:${email}" style="color: #06b6d4; font-size: 16px; font-weight: 600; text-decoration: none;">${email}</a>
                        </p>
                      </div>
                      
                      <!-- Subject -->
                      <div>
                        <div style="display: flex; align-items: center; margin-bottom: 8px;">
                          <span style="display: inline-block; width: 32px; height: 32px; background: linear-gradient(135deg, #06b6d4, #22d3ee); border-radius: 8px; text-align: center; line-height: 32px; margin-right: 12px;">
                            <span style="color: #ffffff; font-size: 16px;">💼</span>
                          </span>
                          <strong style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Subject</strong>
                        </div>
                        <p style="margin: 0; color: #192B39; font-size: 16px; font-weight: 600; padding-left: 44px;">${subject}</p>
                      </div>
                      
                    </td>
                  </tr>
                </table>
                
                <!-- Message Card -->
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border-radius: 12px; padding: 25px; border: 1px solid #e2e8f0;">
                      <div style="display: flex; align-items: center; margin-bottom: 15px;">
                        <span style="display: inline-block; width: 32px; height: 32px; background: linear-gradient(135deg, #06b6d4, #22d3ee); border-radius: 8px; text-align: center; line-height: 32px; margin-right: 12px;">
                          <span style="color: #ffffff; font-size: 16px;">💬</span>
                        </span>
                        <strong style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Message</strong>
                      </div>
                      <div style="background: #ffffff; padding: 20px; border-radius: 8px; border-left: 3px solid #06b6d4; margin-top: 15px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">
                        <p style="margin: 0; color: #334155; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
                      </div>
                    </td>
                  </tr>
                </table>
                
                <!-- Call to Action -->
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 30px;">
                  <tr>
                    <td style="text-align: center;">
                      <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #192B39 0%, #0c1821 100%); color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px; box-shadow: 0 4px 15px rgba(25, 43, 57, 0.3); transition: all 0.3s;">
                        Reply to ${name.split(' ')[0]}
                      </a>
                    </td>
                  </tr>
                </table>
                
              </td>
            </tr>
            
            <!-- Footer -->
            <tr>
              <td style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                <p style="margin: 0 0 10px 0; color: #64748b; font-size: 13px;">
                  This email was sent from the contact form at
                </p>
                <p style="margin: 0 0 15px 0;">
                  <a href="https://oceanedgemedia.co" style="color: #06b6d4; text-decoration: none; font-weight: 600; font-size: 14px;">oceanedgemedia.co</a>
                </p>
                <div style="border-top: 1px solid #e2e8f0; margin: 20px 0; padding-top: 20px;">
                  <p style="margin: 0; color: #94a3b8; font-size: 12px; line-height: 1.6;">
                    © ${new Date().getFullYear()} Ocean Edge Media. All rights reserved.<br/>
                    Web Design • Logo Design • Social Media Marketing
                  </p>
                </div>
              </td>
            </tr>
            
          </table>
        </body>
        </html>
      `,
      replyTo: email,
      attachments: [
        {
          filename: 'logo.png',
          path: process.cwd() + '/public/images/logo/white.png',
          cid: 'logo', // same as in the html img src
        },
      ],
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      message: 'Message sent successfully!',
      success: true,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      message: 'Failed to send message. Please try again later.',
      success: false,
    });
  }
}
