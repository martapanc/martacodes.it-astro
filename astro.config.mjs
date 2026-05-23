// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://martacodes.it',
  integrations: [react(), sitemap()],

  image: {
    service: { entrypoint: 'astro/assets/services/noop' },
    domains: ['res.cloudinary.com'],
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    build: {
      sourcemap: true,
    },
  },

  adapter: vercel(),
});