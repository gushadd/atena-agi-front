<template>
	<main class="flex flex-col gap-10">
		<!-- Hero -->
		<article class="grid lg:grid-cols-2 lg:gap-10">
			<!-- Imagem -->
			<img class="h-auto max-w-full" src="../assets/images/atena-illustration-1.svg" alt="image description" />

			<!-- Textos -->
			<div class="flex flex-col justify-center">
				<h1 class="text-5xl font-bold">Atena AGI</h1>
				<h4 class="text-2xl mt-2 mb-5">A próxima geração de Inteligência Artificial Geral</h4>
				<p class="text-lg text-gray-600 mb-5">
					Estamos quebrando as barreiras entre humano e máquina. A Atena representa o futuro da cognição artificial, com capacidades além da compreensão convencional.
				</p>
				<button class="btn btn-primary btn-soft self-center" @click="scrollToAboutSection"><i class="pi pi-arrow-down"></i>Saiba Mais</button>
			</div>
		</article>

		<article class="flex flex-col gap-5" ref="aboutSection">
			<div class="collapse collapse-arrow bg-base-100 border border-base-300">
				<input type="radio" name="my-accordion-1" checked="checked" />
				<div class="collapse-title font-bold">Sobre a Atena</div>
				<div class="collapse-content">
					Atena é uma inteligência artificial criada para compreender, aprender e agir com propósito. Inspirada na deusa grega da sabedoria, sua missão é unir lógica e empatia para oferecer
					respostas mais humanas, decisões mais precisas e uma experiência de interação realmente inteligente.
				</div>
			</div>
			<div class="collapse collapse-arrow bg-base-100 border border-base-300">
				<input type="radio" name="my-accordion-1" />
				<div class="collapse-title font-bold">Nossa tecnologia</div>
				<div class="collapse-content">
					A Atena foi projetada sobre uma base de aprendizado contínuo, combinando processamento de linguagem natural, análise de dados e tomada de decisão autônoma. Seu núcleo é construído
					com foco em segurança, privacidade e transparência, garantindo que cada interação seja confiável e ética.
				</div>
			</div>
			<div class="collapse collapse-arrow bg-base-100 border border-base-300">
				<input type="radio" name="my-accordion-1" />
				<div class="collapse-title font-bold">Personalidade</div>
				<div class="collapse-content">
					Atena pensa com precisão, fala com clareza e aprende com você. Cada conversa é uma oportunidade de evolução — não apenas para a IA, mas para o mundo ao seu redor.
				</div>
			</div>
			<div class="collapse collapse-arrow bg-base-100 border border-base-300">
				<input type="radio" name="my-accordion-1" />
				<div class="collapse-title font-bold">Propósito</div>
				<div class="collapse-content">
					Mais do que responder, a Atena busca compreender. Seu objetivo é impulsionar a inteligência humana, ajudando pessoas, empresas e instituições a tomarem decisões melhores, mais
					rápidas e mais conscientes.
				</div>
			</div>
		</article>
	</main>
</template>

<script setup>
import { ref } from "vue";

const aboutSection = ref(null);

const scrollToAboutSection = () => {
	if (aboutSection.value) {
		aboutSection.value.scrollIntoView({ behavior: "smooth" });
	}
};
</script>
