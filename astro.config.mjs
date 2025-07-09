// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

import tailwindcss from '@tailwindcss/vite';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://cdz-astro.netlify.app/',
  integrations: [preact(), vue()],

  devToolbar: {
    enabled: true
  },

  vite: {
    plugins: [tailwindcss()]
  }
});