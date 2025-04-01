import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	modules: ["@nuxt/ui"],

	colorMode: {
		preference: "dark",
	},

	compatibilityDate: "2025-04-01",
	ssr: false,
	css: ["~/assets/css/main.css"],
	vite: {
		plugins: [tailwindcss()],
	},
	app: {
		pageTransition: { name: "page", mode: "out-in" },
	},
});
