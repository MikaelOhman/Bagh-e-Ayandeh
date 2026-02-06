// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mikaelohman.github.io',
  base: '/', // Changed for local dev - set to '/Bagh-e-Ayandeh' for GitHub Pages
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
