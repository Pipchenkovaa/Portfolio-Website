/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		'./index.html',
    './src/**/*.js'
	],
  theme: {
    extend: {
			colors: {
				mainDarkTheme: '#090909',
				firstText: '#F5F5F8',
				secondText: '#ababab',
				borderDark: '#101010',
				borderLight: '#252525',
				borderBG: '#0d0d0d',
				dark: '#0c0c0c',
				hoverLight: '#C0C0C0',
			},
			boxShadow: {
        xlLight: '0 0 10px rgba(192, 192, 192, 0.3)',
        xlDark: '0 0 10px rgba(105, 105, 105, 0.6)',
      }
		},
  },
  plugins: [],
}

