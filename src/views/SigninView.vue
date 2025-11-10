<template>
	<main class="flex h-screen items-center justify-center">
		<section class="flex flex-col gap-5 items-center p-10 w-[450px] rounded-lg shadow-md">
			<img class="h-auto max-w-10" src="../assets/logos/atena-logo-icon.svg" alt="atena_icon" />
			<h4 class="text-2xl font-bold">Cadastro</h4>

			<form @submit.prevent="signin" class="flex flex-col w-[300px]">
				<fieldset class="fieldset">
					<legend class="fieldset-legend">Nome Completo</legend>
					<input v-model="name" type="text" class="input input-primary" required />
				</fieldset>

				<fieldset class="fieldset">
					<legend class="fieldset-legend">Email</legend>
					<input v-model="email" type="email" class="input input-primary" required />
				</fieldset>

				<fieldset class="fieldset">
					<legend class="fieldset-legend">Senha</legend>
					<input v-model="password" type="password" class="input input-primary" required />
				</fieldset>

				<fieldset class="fieldset">
					<legend class="fieldset-legend">Confirme a Senha</legend>
					<input v-model="confirmPassword" type="password" class="input input-primary" required />
				</fieldset>
				<div v-if="error" class="text-error">{{ error }}</div>
				<button type="submit" class="btn btn-primary mt-5">Cadastrar</button>
			</form>

			<p>Já tem tem conta? <RouterLink to="login" class="text-primary hover:underline">Faça login.</RouterLink></p>

			<RouterLink to="/" class="text-primary hover:underline">Voltar ao início</RouterLink>
		</section>
	</main>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import apiClient from '../api';

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const error = ref(null);

const router = useRouter();

const signin = async () => {
	error.value = null;
	if (password.value !== confirmPassword.value) {
		error.value = 'As senhas não conferem.';
		return;
	}

	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
	if (!passwordRegex.test(password.value)) {
		error.value = 'A senha deve ter no mínimo 8 caracteres, uma letra maiúscula, uma minúscula, um número e um caractere especial.';
		return;
	}

	try {
		await apiClient.post('/api/user', {
			nome: name.value,
			email: email.value,
			senha: password.value,
		});
		router.push('/login');
	} catch (err) {
		error.value = 'Erro ao criar usuário. Tente novamente.';
	}
};
</script>
