export default defineNuxtRouteMiddleware((to, from) => {
	const token = localStorage.getItem("accessToken");
	if (token == null) {
		return navigateTo("/login");
	}
});
