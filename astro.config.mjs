// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      credits: true,
      title: 'Git Commit Audio',
      titleDelimiter: '—',
      description: 'Add a spark of joy to coding—hear a surprise sound every time you commit.',
      logo: {
        dark: './src/assets/logo-invert.svg',
        light: './src/assets/logo.svg',
      },
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/dnhn/gca' }],
      sidebar: ['intro', 'install', 'thanks'],
      customCss: ['./src/styles/global.css'],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
