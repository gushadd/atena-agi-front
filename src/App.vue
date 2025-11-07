<template>
	<div class="drawer overflow-y-auto">
		<!-- Controla visibilidade do menu lateral -->
		<input id="main-drawer" type="checkbox" class="drawer-toggle" v-model="drawerIsVisible" />

		<div class="drawer-content">
			<header v-if="$route.name !== 'login' && $route.name !== 'signin' && $route.name !== 'chat'">
				<div class="navbar shadow-sm px-5 md:px-44 xl:px-64">
					<!-- Botões canto esquerdo -->
					<div class="navbar-start">
						<label for="main-drawer" class="btn btn-ghost drawer-button xl:hidden">
							<i class="pi pi-bars"></i>
						</label>
						<RouterLink to="/chat">
							<img class="h-auto max-w-36" src="../src/assets/logos/atena-logo-full.svg" alt="atena_logo" />
						</RouterLink>
					</div>

					<!-- Botões meio -->
					<div class="navbar-center hidden xl:flex">
						<ul class="menu menu-horizontal px-1 flex gap-10">
							<li><RouterLink to="/" class="text-lg font-semibold">Início</RouterLink></li>
							<li><RouterLink to="/about" class="text-lg font-semibold">Sobre Nós</RouterLink></li>
						</ul>
					</div>

					<!-- Botões canto direito -->
					<div class="navbar-end space-x-2 hidden xl:flex">
						<RouterLink to="/login" class="btn btn-primary w-26">Login</RouterLink>
						<RouterLink to="/signin" class="btn btn-secondary btn-outline w-26">Cadastrar</RouterLink>
					</div>

					<!-- Dropdown -->
					<div class="navbar-end space-x-2 xl:hidden">
						<div class="dropdown dropdown-end">
							<button class="btn btn-ghost btn-circle" tabindex="0">
								<i class="pi pi-ellipsis-v"></i>
							</button>
							<ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm space-y-2">
								<RouterLink to="/login" class="btn btn-primary">Login</RouterLink>
								<RouterLink to="/signin" class="btn btn-outline btn-secondary">Cadastrar</RouterLink>
							</ul>
						</div>
					</div>
				</div>
			</header>

			<main class="px-5 md:px-44 xl:px-64 py-6">
				<RouterView />
			</main>
		</div>

		<!-- Menu lateral -->
		<div class="drawer-side">
			<label for="main-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
			<ul class="menu bg-base-200 min-h-full w-80 p-4">
				<li><RouterLink to="/" class="text-lg font-semibold" @click="drawerIsVisible = false">Início</RouterLink></li>
				<li><RouterLink to="/about" class="text-lg font-semibold" @click="drawerIsVisible = false">Sobre Nós</RouterLink></li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

const drawerIsVisible = ref(false);
</script>
