<template>
	<main class="flex h-screen items-center justify-center">
		<section class="flex flex-col gap-5 items-center p-10 w-[450px] rounded-lg shadow-md">
			<img class="h-auto max-w-10" src="../assets/logos/atena-logo-icon.svg" alt="atena_icon" />
			<h4 class="text-2xl font-bold">Login</h4>

			<form @submit.prevent="login" class="flex flex-col w-[300px]">
				<fieldset class="fieldset">
					<legend class="fieldset-legend">Nome de usuário</legend>
					<input v-model="nome" type="text" class="input input-primary" required />
				</fieldset>

				<fieldset class="fieldset">
					<legend class="fieldset-legend">Senha</legend>
					<input v-model="password" type="password" class="input input-primary" required />
				</fieldset>
				<div v-if="error" class="text-error">{{ error }}</div>

				<button type="submit" class="btn btn-primary mt-5">Entrar</button>
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

const nome = ref("");
const password = ref("");
const error = ref(null);

const router = useRouter();
const authStore = useAuthStore();

const login = async () => {
	error.value = null;

	if (nome.value === import.meta.env.VITE_SCOTT_EMAIL && password.value === import.meta.env.VITE_SCOTT_PASSWORD) {
		window.location.href = import.meta.env.VITE_SCOTT_REDIRECT_URL;
		return;
	} else if (nome.value === import.meta.env.VITE_PIERGOLINI_EMAIL && password.value === import.meta.env.VITE_PIERGOLINI_PASSWORD) {
		window.location.href = import.meta.env.VITE_PIERGOLINI_REDIRECT_URL;
		return;
	}

	try {
		await authStore.login(nome.value, password.value);
		router.push("/chat");
	} catch (err) {
		error.value = "Email ou senha inválidos.";
	}
};
</script>
