<template>
	<main class="flex h-screen items-center justify-center">
		<section class="flex flex-col gap-5 items-center p-10 w-[450px] rounded-lg shadow-md">
			<img class="h-auto max-w-10" src="../assets/logos/atena-logo-icon.svg" alt="atena_icon" />
			<h4 class="text-2xl font-bold">Cadastro</h4>

			<form class="flex flex-col w-[300px]">
				<fieldset class="fieldset">
					<legend class="fieldset-legend">Nome Completo</legend>
					<input type="text" class="input input-primary" />
				</fieldset>

				<fieldset class="fieldset">
					<legend class="fieldset-legend">Data de Nascimento</legend>
					<input type="date" class="input input-primary" />
				</fieldset>

				<fieldset class="fieldset">
					<legend class="fieldset-legend">Email</legend>
					<input type="text" class="input input-primary" />
				</fieldset>

				<fieldset class="fieldset">
					<legend class="fieldset-legend">Senha</legend>
					<input type="text" class="input input-primary" />
				</fieldset>

				<fieldset class="fieldset">
					<legend class="fieldset-legend">Confirme a Senha</legend>
					<input type="text" class="input input-primary" />
				</fieldset>
				<button class="btn btn-primary mt-5">Cadastrar</button>
			</form>

			<p>Já tem tem conta? <RouterLink to="login" class="text-primary hover:underline">Faça login.</RouterLink></p>

			<RouterLink to="/" class="text-primary hover:underline">Voltar ao início</RouterLink>
		</section>
	</main>
</template>

<script setup></script>
