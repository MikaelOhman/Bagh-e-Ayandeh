// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mikaelohman.github.io',
  base: '/Bagh-e-Ayandeh',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
