import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useAuthStore } from "@/stores/auth";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/about",
			name: "about",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/AboutView.vue"),
		},
		{
			path: "/login",
			name: "login",
			component: () => import("../views/LoginView.vue"),
		},
		{
			path: "/signin",
			name: "signin",
			component: () => import("../views/SigninView.vue"),
		},
		{
			path: "/chat",
			name: "chat",
			component: () => import("../views/ChatView.vue"),
			meta: { requiresAuth: true },
		},
	],
});

router.beforeEach((to, from, next) => {
	const authStore = useAuthStore();
	if (to.meta.requiresAuth && !authStore.isAuthenticated) {
		next({ name: 'login' });
	} else {
		next();
	}
});

export default router;
