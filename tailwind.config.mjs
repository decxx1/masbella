/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': {
					'50': '#e63f9b',
					'100': '#d80a7c',
				},
				'body-light': '#fee7f7',
			}
		},
		
	},
	plugins: [],
}
