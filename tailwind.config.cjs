/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
      			'moon-border': 'inset -15px 0px 0px 10px #FFFFFF',
    		},
			animation: {
				'move-right': 'moveRight 2.15s linear infinite',
				'move-right2': 'moveRight2 12s linear infinite',
				'spin-circle': 'spinCircle 5s linear infinite',
				'spin-counter': 'spinCounter 5s linear infinite',
				'moon-rotation': 'spinCircle 5s linear infinite reverse',
				'moon-rotation2': 'spinCounter 5s linear infinite reverse',
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
				spinCircle: {
				'0%': { transform: 'rotate(0deg)' },
				'100%': { transform: 'rotate(360deg)' },
				},
				spinCounter: {
				'0%': { transform: 'rotate(0deg)' },
				'100%': { transform: 'rotate(-360deg)' },
				}
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

			// @keyframes rotateAroundCenter {
			// 	0% {
			// 		transform: rotate(0deg);
			// 	}
			// 	100% {
			// 		transform: rotate(360deg);
			// 	}
        	// }