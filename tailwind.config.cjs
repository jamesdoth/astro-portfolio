/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		animation: {
			'move-right': 'moveRight 2.15s linear infinite', // Define the Tailwind CSS animation
		},
		keyframes: {
			moveRight: {
			'0%': { backgroundPosition: '0 0' }, // Define the keyframes
			'100%': { backgroundPosition: '192px 0' }, // Define the keyframes
			},
		},
		},
	},
	plugins: [],
}
            /* @keyframes moveRight {
                0% {
                    background-position: 0 0;
                }
                100% {
                    background-position: 192px 0;
                }
            }

            .animated-grass {
                animation: moveRight 2.15s linear forwards infinite;
                animation-iteration-count: infinite;
            } */