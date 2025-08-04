// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Git Commit Audio',
			description: 'Add a spark of joy to coding—hear a surprise sound every time you commit.',
			favicon: 'favicon.png',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/dnhn/gca' }],
			sidebar: [
				{ slug: 'docs' },
				{ slug: 'docs/thanks' },
			],
			customCss: ['./src/styles/global.css'],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
