/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		backgroundImage: {
			'grass': "url('src/images/GRASS.png')"
		},
		extend: {
			colors: {
			}
		},
	},
	plugins: [],
}
