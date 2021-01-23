module.exports = {
	purge: ["./pages/**/*.js", "./components/**/*.js"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		flex: {
			1: "1 1 25%",
			auto: "1 1 auto",
			initial: "0 1 auto",
			inherit: "inherit",
			none: "none",
			2: "1 1 75%",
			logo: "1 1 10%",
			nav: "1 1 80%",
			links: "1 1 10%",
		},
		colors: {
			red: {
				light: "##FFCACA",
				DEFAULT: "#F48FA3",
				dark: "#FF7676",
			},
		},
		borderColor: (theme) => ({
			...theme("colors"),
			DEFAULT: theme("colors.red.300", "#FF7676"),
			primary: "#FF7676",
			secondary: "#F48FA3",
			danger: "#FF7676",
		}),
	},
	variants: {
		extend: {},
	},
	plugins: [],
	corePlugins: {
		// ...
		container: false,
	},
};
