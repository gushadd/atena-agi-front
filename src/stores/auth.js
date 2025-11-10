import { defineStore } from "pinia";
import { ref, computed } from "vue";
import apiClient from "../api";

export const useAuthStore = defineStore("auth", () => {
	const token = ref(localStorage.getItem("token") || null);
	const user = ref(JSON.parse(localStorage.getItem("user")) || null);

	const isAuthenticated = computed(() => !!token.value);

	function setToken(newToken) {
		token.value = newToken;
		localStorage.setItem("token", newToken);
		apiClient.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
	}

	function setUser(newUser) {
		user.value = newUser;
		localStorage.setItem("user", JSON.stringify(newUser));
	}

	function clearAuth() {
		token.value = null;
		user.value = null;
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		localStorage.removeItem("messages");
		delete apiClient.defaults.headers.common["Authorization"];
	}

	async function login(email, password) {
		const response = await apiClient.post("/login", { nome: email, senha: password });
		const { access_token, user: userData } = response.data;
		setToken(access_token);
		setUser(userData);
	}

	function logout() {
		clearAuth();
	}

	return { token, user, setToken, setUser, clearAuth, login, logout, isAuthenticated };
});
