import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const { name, company, email, subject, message } = await request.json();

  if (!email) {
    return new Response(JSON.stringify({ error: 'Email address is required' }), { status: 400 });
  }

  const resendApiKey = import.meta.env.RESEND_API_KEY || '';

  if (!resendApiKey) {
    return new Response(JSON.stringify({ error: 'Resend API key is required' }), { status: 500 });
  }

  const resend = new Resend(resendApiKey);

  try {
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: import.meta.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: import.meta.env.RESEND_TO_EMAIL || '',
      subject,
      html: `<div><p>${name}${company ? ` @ ${company}` : ''} wrote:</p><p>${message}</p></div>`,
    });

    if (emailError) {
      console.error('Error sending email:', emailError);
      return new Response(JSON.stringify({ error: 'Email could not be sent' }), { status: 500 });
    }

    console.log('Email sent:', { emailData });
    return new Response(JSON.stringify({ message: 'Email sent' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Email could not be sent' }), { status: 500 });
  }
};
