import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'amirhamja.ofc1@gmail.com';

const resend = new Resend(resendApiKey || 'dummy_key');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, budget } = body;

    // Strict validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Name is required.' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: 'Message must be at least 5 characters long.' },
        { status: 400 }
      );
    }

    const emailSubject = subject?.trim()
      ? `[Portfolio Inquiry] ${subject.trim()} - from ${name.trim()}`
      : `[Portfolio Inquiry] New message from ${name.trim()}`;

    // If API key is not configured, fallback gracefully with log
    if (!resendApiKey || resendApiKey === 'dummy_key') {
      console.warn('[CONTACT FORM] RESEND_API_KEY missing in environment variables.');
      return NextResponse.json(
        {
          success: true,
          message: 'Message received! (Add RESEND_API_KEY in Vercel to deliver directly to inbox)',
        },
        { status: 200 }
      );
    }

    // Dispatch email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [receiverEmail],
      replyTo: email.trim(),
      subject: emailSubject,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0B0B0D; color: #F2F2EE; padding: 24px; margin: 0; }
              .container { max-width: 600px; margin: 0 auto; background-color: #141B2D; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; overflow: hidden; }
              .header { background: linear-gradient(135deg, #1B243B 0%, #121727 100%); padding: 28px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); }
              .header h2 { margin: 0 0 6px 0; color: #D7E52A; font-size: 20px; font-weight: 700; letter-spacing: -0.5px; }
              .header p { margin: 0; color: #9A9AA3; font-size: 13px; }
              .content { padding: 28px; }
              .field { margin-bottom: 20px; }
              .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #9A9AA3; margin-bottom: 6px; font-weight: 600; }
              .value { font-size: 15px; color: #F2F2EE; background-color: #0B0B0D; padding: 12px 16px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.05); }
              .message-box { font-size: 15px; line-height: 1.6; color: #F2F2EE; background-color: #0B0B0D; padding: 16px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.05); white-space: pre-wrap; }
              .footer { padding: 20px 28px; background-color: #0B0B0D; border-top: 1px solid rgba(255, 255, 255, 0.06); text-align: center; font-size: 12px; color: #9A9AA3; }
              .badge { display: inline-block; background-color: rgba(215, 229, 42, 0.15); color: #D7E52A; border: 1px solid rgba(215, 229, 42, 0.3); padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: 600; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>⚡ New Portfolio Inquiry</h2>
                <p>Received directly through your portfolio contact form at amir-hamja.vercel.app</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Sender Name</div>
                  <div class="value">${name.trim()}</div>
                </div>
                <div class="field">
                  <div class="label">Sender Email (Click reply to respond directly)</div>
                  <div class="value"><a href="mailto:${email.trim()}" style="color: #D7E52A; text-decoration: none;">${email.trim()}</a></div>
                </div>
                ${
                  budget
                    ? `
                <div class="field">
                  <div class="label">Estimated Budget</div>
                  <div class="value"><span class="badge">${budget}</span></div>
                </div>
                `
                    : ''
                }
                <div class="field">
                  <div class="label">Subject</div>
                  <div class="value">${subject?.trim() || 'General Inquiry'}</div>
                </div>
                <div class="field">
                  <div class="label">Message</div>
                  <div class="message-box">${message.trim()}</div>
                </div>
              </div>
              <div class="footer">
                Hit "Reply" in your email client to respond directly to ${email.trim()}.
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('[RESEND ERROR]', error);
      return NextResponse.json(
        { success: false, error: error.message || 'Failed to deliver message via Resend.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your message was delivered directly to Amir Hamja via Resend!',
        dataId: data?.id,
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error('[CONTACT API EXCEPTION]', err);
    return NextResponse.json(
      { success: false, error: err.message || 'Internal server error processing inquiry.' },
      { status: 500 }
    );
  }
}
