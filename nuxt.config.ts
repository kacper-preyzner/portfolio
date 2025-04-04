import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	modules: ["@nuxt/ui", "nuxt-particles", "@nuxt/image"],

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
	particles: {
		lazy: false, // Disable lazy loading to load immediately
		mode: "slim", // Use slim mode for better performance
	},
});
