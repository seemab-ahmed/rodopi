import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message, recaptchaToken } = body;

    // Verify reCAPTCHA token
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    
    if (!secretKey) {
      return NextResponse.json(
        { success: false, message: 'reCAPTCHA is not configured' },
        { status: 500 }
      );
    }

    const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;
    
    const verificationResponse = await fetch(verificationURL, {
      method: 'POST',
    });

    const verificationData = await verificationResponse.json();

    // Check if verification was successful and score is acceptable
    if (!verificationData.success || verificationData.score < 0.5) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'reCAPTCHA verification failed',
          score: verificationData.score 
        },
        { status: 400 }
      );
    }

    // Validate form data
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Verify SMTP configuration
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFromName = process.env.SMTP_FROM_NAME;
    const smtpFromEmail = process.env.SMTP_FROM_EMAIL;
    const recipientEmail = process.env.SMTP_RECIPIENT_EMAIL;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !recipientEmail) {
      console.error('SMTP configuration is missing');
      return NextResponse.json(
        { success: false, message: 'Email configuration error' },
        { status: 500 }
      );
    }

    try {
      // Create SMTP transporter
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: parseInt(smtpPort),
        secure: false, // Use TLS (not SSL), which is false with port 587
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
        tls: {
          rejectUnauthorized: false, // For Gmail with app passwords
        },
      });

      // Send email to admin
      await transporter.sendMail({
        from: `${smtpFromName} <${smtpFromEmail}>`,
        to: recipientEmail,
        replyTo: email,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><em>This email was sent through the RODOPI contact form.</em></p>
        `,
        text: `
Name: ${name}
Email: ${email}
Message: ${message}

---
This email was sent through the RODOPI contact form.
        `,
      });

      console.log('Contact form email sent successfully:', { name, email, recipientEmail });

      return NextResponse.json(
        { 
          success: true, 
          message: 'Message sent successfully!',
          score: verificationData.score 
        },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to send email. Please try again later.',
          error: emailError.message
        },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
