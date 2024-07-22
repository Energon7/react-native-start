/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				'gilroy-100': ['Gilroy-Thin'],
				'gilroy-200': ['Gilroy-ExtraLight'],
				'gilroy-300': ['Gilroy-Light'],
				'gilroy-400': ['Gilroy-Regular'],
				'gilroy-500': ['Gilroy-Medium'],
				'gilroy-600': ['Gilroy-SemiBold'],
				'gilroy-700': ['Gilroy-Bold'],
				'gilroy-800': ['Gilroy-Black']
			},
			colors: {
				primary: '#19173D',
				secondary: '#262450',
				textPrimary: '#7B78AA'
			}
		}
	},
	plugins: []
}
