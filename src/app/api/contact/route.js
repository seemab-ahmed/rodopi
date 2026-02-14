import { NextResponse } from 'next/server';

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

    // TODO: Send email or save to database
    // For now, we'll just log it
    console.log('Contact form submission:', { name, email, message, score: verificationData.score });

    // Here you would typically:
    // 1. Send an email using nodemailer, SendGrid, etc.
    // 2. Save to database
    // 3. Integrate with CRM
    
    // Example email integration (commented out):
    /*
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: 'info@rodopi.de',
      subject: `Contact Form: ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    });
    */

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully!',
        score: verificationData.score 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
