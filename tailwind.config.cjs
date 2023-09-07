/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		animation: {
			'move-right': 'moveRight 2.15s linear infinite',
			'move-right2': 'moveRight2 12s linear infinite',
		},
		keyframes: {
			moveRight: {
			'0%': { backgroundPosition: '0 0' },
			'100%': { backgroundPosition: '192px 0' },
			},
			moveRight2: {
			'0%': { backgroundPosition: '0 0' },
			'100%': { backgroundPosition: '768px 0' },
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