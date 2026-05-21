import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const { token } = await request.json();

  if (!token) {
    return new Response(JSON.stringify({ error: 'Error providing ReCaptcha token' }), { status: 400 });
  }

  const key = import.meta.env.RECAPTCHA_SECRET_KEY;

  if (!key) {
    return new Response(JSON.stringify({ error: 'Error retrieving reCaptcha secret key.' }), { status: 500 });
  }

  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${key}&response=${token}`,
  });

  if (!response.ok) {
    return new Response(JSON.stringify({ error: 'Error verifying reCaptcha.' }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: 'Verified' }), { status: 200 });
};
