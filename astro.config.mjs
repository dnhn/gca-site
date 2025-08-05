// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

const ogImage = new URL('og.png', 'https://gca.nhan.dev').href

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      components: {
        Footer: './src/components/footer.astro',
      },
      credits: true,
      customCss: ['./src/styles/global.css'],
      description: 'Add a spark of joy to coding—hear a surprise sound every time you commit.',
      editLink: { baseUrl: 'https://github.com/dnhn/gca-site/edit/root' },
      head: [{ tag: 'meta', attrs: { name: 'og:image', content: ogImage } }],
      lastUpdated: true,
      logo: {
        dark: './src/assets/logo-invert.svg',
        light: './src/assets/logo.svg',
      },
      sidebar: ['intro', 'install', 'config', 'thanks'],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/dnhn/gca' }],
      title: 'Git Commit Audio',
      titleDelimiter: '—',
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
