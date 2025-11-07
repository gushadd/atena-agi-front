<template>
	<main class="flex h-screen items-center justify-center">
		<section class="flex flex-col gap-5 items-center p-10 w-[450px] rounded-lg shadow-md">
			<img class="h-auto max-w-10" src="../assets/logos/atena-logo-icon.svg" alt="atena_icon" />
			<h4 class="text-2xl font-bold">Login</h4>

			<form class="flex flex-col gap-5 w-[300px]">
				<input type="text" placeholder="Email" class="input input-primary" />
				<input type="text" placeholder="Senha" class="input input-primary" />
				<button class="btn btn-primary">Entrar</button>
			</form>

			<p>Não tem conta? <RouterLink to="signin" class="text-primary hover:underline">Cadastre-se.</RouterLink></p>

			<RouterLink to="/" class="text-primary hover:underline">Voltar ao início</RouterLink>
		</section>
	</main>
</template>

<script setup></script>
