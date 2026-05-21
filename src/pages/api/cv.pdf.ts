import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async () => {
  const cloudinaryUrl =
    'https://res.cloudinary.com/dwrurydlt/image/upload/v1709393747/CV_2024-03.pdf';

  try {
    const response = await fetch(cloudinaryUrl);

    if (!response.ok) {
      return new Response('Internal Server Error', { status: 500 });
    }

    return new Response(response.body, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename=cv.pdf',
      },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};
