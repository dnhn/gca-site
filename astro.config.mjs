// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

const ogImage = new URL('og.png', 'https://git-audio.nhan.dev').href

export default defineConfig({
  integrations: [
    starlight({
      components: {
        Footer: './src/components/starlight/footer.astro',
        Pagination: './src/components/starlight/pagination.astro',
        SkipLink: './src/components/starlight/skip-link.astro',
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
        replacesTitle: true,
      },
      sidebar: [
        'intro',
        'install',
        'cli',
        'thanks',
      ],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/dnhn/git-audio' }],
      title: 'Git Audio',
      titleDelimiter: '—',
    }),
  ],
  site: 'https://git-audio.nhan.dev',
  vite: {
    plugins: [tailwindcss()],
  },
});
