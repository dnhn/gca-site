// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Git Commit Audio',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/dnhn/gca' }],
			sidebar: [
				{ slug: 'docs' },
			],
			customCss: ['./src/styles/global.css'],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
