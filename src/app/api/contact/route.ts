import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, budget } = body;

    // Strict validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ success: false, error: 'Name is required' }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'A valid email address is required' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: 'Message must be at least 5 characters long' },
        { status: 400 }
      );
    }

    // Server-side audit log
    console.log('[PORTFOLIO CONTACT FORM SUBMISSION]', {
      timestamp: new Date().toISOString(),
      name: name.trim(),
      email: email.trim(),
      subject: subject?.trim() || 'General Inquiry',
      budget: budget || 'Not specified',
      messagePreview: message.trim().substring(0, 80) + '...',
    });

    // NOTE: To forward this to your real inbox via Resend / SendGrid / Nodemailer,
    // you can configure RESEND_API_KEY or SMTP variables in your Vercel project settings:
    //
    // if (process.env.RESEND_API_KEY) {
    //   await resend.emails.send({ ... });
    // }

    return NextResponse.json(
      {
        success: true,
        message: 'Your message was delivered successfully. I will get back to you shortly!',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[CONTACT API ERROR]', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error processing inquiry.' },
      { status: 500 }
    );
  }
}

