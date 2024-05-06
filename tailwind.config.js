/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				lg: "2rem",
				xl: "3rem",
			},
		},
		extend: {
			colors: {
				primary: {
					DEAFULT: "#1c2641",
					50: "#f1f6fd",
					100: "#e0ecf9",
					200: "#c9def4",
					300: "#a3c9ed",
					400: "#77abe3",
					500: "#578eda",
					600: "#4374cd",
					700: "#3960bc",
					800: "#345099",
					900: "#2e457a",
					950: "#1c2641",
				},

				secondary: {
					DEFAULT: "#00bfa6",
					50: "#eefffb",
					100: "#c6fff3",
					200: "#8effe9",
					300: "#4dfbdc",
					400: "#19e8ca",
					500: "#00bfa6",
					600: "#00a493",
					700: "#028376",
					800: "#08675f",
					900: "#0c554e",
					950: "#003432",
				},
			},
		},
	},
	plugins: [],
};
