<template>
	<main class="flex h-screen items-center justify-center">
		<section class="flex flex-col gap-5 items-center p-10 w-[450px] rounded-lg shadow-md">
			<img class="h-auto max-w-10" src="../assets/logos/atena-logo-icon.svg" alt="atena_icon" />
			<h4 class="text-2xl font-bold">Login</h4>

			<form @submit.prevent="login" class="flex flex-col gap-5 w-[300px]">
				<input v-model="email" type="text" placeholder="Email" class="input input-primary" required />
				<input v-model="password" type="password" placeholder="Senha" class="input input-primary" required />
				<div v-if="error" class="text-error">{{ error }}</div>
				<button type="submit" class="btn btn-primary">Entrar</button>
			</form>

			<p>Não tem conta? <RouterLink to="signin" class="text-primary hover:underline">Cadastre-se.</RouterLink></p>

			<RouterLink to="/" class="text-primary hover:underline">Voltar ao início</RouterLink>
		</section>
	</main>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";

const email = ref("");
const password = ref("");
const error = ref(null);

const router = useRouter();
const authStore = useAuthStore();

const login = async () => {
	error.value = null;
	try {
		await authStore.login(email.value, password.value);
		router.push("/chat");
	} catch (err) {
		error.value = "Email ou senha inválidos.";
	}
};
</script>
