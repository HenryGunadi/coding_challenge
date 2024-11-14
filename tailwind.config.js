/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts,tsx,jsx}'],
	theme: {
		extend: {
			height: {
				'1/2-screen': '50vh',
			},
		},
	},
	plugins: [],
};
