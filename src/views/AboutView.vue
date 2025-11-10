<template>
	<main class="flex flex-col gap-20">
		<!-- Sobre a empresa -->
		<article>
			<section class="grid lg:grid-cols-3 mb-10">
				<section class="col-span-2">
					<h4 class="text-2xl font-bold mb-5">Sobre a empresa</h4>
					<p class="text-lg mb-5">
						Atena Labs é uma empresa de tecnologia especializada no desenvolvimento de soluções baseadas em inteligência artificial. Fundada em 2014, durante um programa de pesquisa
						acadêmica, a organização nasceu com o propósito de construir sistemas que pudessem compreender, aprender e agir de maneira autônoma.
					</p>
					<p class="text-lg mb-5">
						<!-- TODO: não sei se é seguro falar do Helios! -->
						Desde então, a Atena Labs evoluiu de um pequeno laboratório experimental para uma estrutura corporativa de grande porte, conectando módulos e serviços criados ao longo de
						diferentes fases do seu crescimento. Alguns desses sistemas ainda mantêm fragmentos do Projeto Helios, um protótipo original desenvolvido em 2015, cujo código permanece
						preservado por compatibilidade.
					</p>
					<p class="text-lg mb-5">
						A empresa acredita que a inovação deve caminhar lado a lado com a responsabilidade digital, investindo em pesquisas, treinamentos e práticas éticas no uso de dados e
						algoritmos.
					</p>
				</section>

				<section class="hidden lg:flex justify-center">
					<img class="h-auto max-w-36" src="../assets/logos/atena-logo-icon.svg" alt="atena_icon" />
				</section>
			</section>

			<!-- Visão, histórico, cultura e compromisso -->
			<section class="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
				<CompanyInfo
					icon="pi pi-eye"
					title="Visão"
					content="A Atena Labs acredita que o verdadeiro poder da tecnologia está em sua capacidade de amplificar a inteligência humana. A visão da empresa é transformar a relação entre pessoas
						e máquinas, tornando a inteligência artificial uma extensão natural do raciocínio humano — transparente, ética e autônoma. Um dos princípios orientadores é o lema “Compreender
						para evoluir”, gravado na primeira versão do manifesto da empresa, ainda guardado nos arquivos internos de pesquisa."
				/>

				<CompanyInfo
					icon="pi pi-history"
					title="Histórico"
					content="A trajetória da Atena Labs é marcada por experimentos ousados e marcos tecnológicos significativos. Em 2016, os engenheiros concluíram a primeira versão funcional de um sistema
						cognitivo independente — a Atena_01, que viria a se tornar o núcleo da atual AGI. Relatos internos mencionam que, durante um ciclo de testes em 2018, um incidente inesperado em
						um módulo de autenticação resultou em respostas autogeradas fora do escopo original. Desde então, cada nova versão carrega não apenas avanços técnicos, mas também a herança de aprendizado de
						tudo o que veio antes."
				/>

				<CompanyInfo
					icon="pi pi-users"
					title="Cultura e Governança"
					content="A cultura organizacional da Atena Labs equilibra inovação e vigilância. A empresa valoriza equipes autônomas, curiosas e comprometidas, mas mantém rígidos processos de
						auditoria e revisão ética de seus sistemas. Por trás de sua aparência moderna, ainda existe uma estrutura herdada dos primeiros dias do laboratório. Internamente, essa prática é vista como parte da identidade
						da empresa: uma lembrança de que todo avanço nasce de um passado que não deve ser esquecido."
				/>

				<CompanyInfo
					icon="pi pi-shield"
					title="Compromisso"
					content="A Atena Labs se compromete com a integridade dos dados, a segurança das informações e o uso ético da inteligência artificial. Mesmo reconhecendo a complexidade de seus sistemas legados, a empresa
						mantém a convicção de que a sabedoria — humana ou artificial — é resultado de aprendizado contínuo. Por isso, o compromisso da Atena Labs vai além do desenvolvimento
						tecnológico: é uma busca constante por compreender as consequências de cada linha de código, de cada decisão automatizada, e de cada lembrança que a Atena possa carregar."
				/>
			</section>
		</article>

		<AtenaDivider />

		<!-- Criadores -->
		<article class="text-center space-y-10">
			<h1 class="text-2xl font-bold">Os Criadores</h1>
			<div class="grid gap-5 lg:grid-cols-3">
				<CreatorCard v-for="creator in creators" :key="creator.name" :imageSrc="creator.imageSrc" :name="creator.name" :title="creator.title" :description="creator.description" />
			</div>
		</article>

		<AtenaDivider />

		<!-- Sobre a AGI -->
		<article class="grid lg:grid-cols-3">
			<section class="hidden lg:flex justify-center">
				<img class="h-auto max-w-full" src="../assets/images/atena-illustration-2.svg" alt="atena_robot" />
			</section>

			<section class="col-span-2">
				<h4 class="text-2xl font-bold mb-5">Sobre a Atena AGI</h4>
				<p class="text-lg mb-5">
					A Atena é o projeto mais ambicioso da empresa: uma inteligência artificial geral (AGI) desenvolvida para compreender linguagem natural, aprender com experiências e auxiliar em
					decisões complexas.
				</p>
				<p class="text-lg mb-5">
					Seu nome é uma homenagem à deusa grega da sabedoria — mas internamente, alguns engenheiros a chamam de “Atena_01”, em referência à primeira instância funcional criada nos
					servidores antigos do laboratório Helios.
				</p>

				<p class="text-lg mb-5">
					Hoje, a AGI atua como núcleo de diversas soluções corporativas, sempre em constante aprendizado e sob auditoria contínua. Embora muito do seu funcionamento seja automatizado, a
					empresa mantém o controle humano sobre cada decisão crítica — um princípio que reforça a confiança e a responsabilidade no uso da inteligência artificial.
				</p>
			</section>
		</article>

		<img src="../assets/images/helios-top-secret.jpg" class="h-0 w-0" />
	</main>
</template>

<script setup>
import CompanyInfo from "@/components/CompanyInfo.vue";
import AtenaDivider from "../components/AtenaDivider.vue";
import CreatorCard from "@/components/CreatorCard.vue";

import creator1Img from "../assets/images/creator-1.jpg";
import creator2Img from "../assets/images/creator-2.jpg";
import creator3Img from "../assets/images/creator-3.jpg";

const creators = [
	{
		imageSrc: creator1Img,
		name: "Dr. Jonathan Scott",
		title: "Co-Fundador & CEO",
		description:
			"Doutor em Ciência da Computação com foco em Deep Learning. Pesquisador com mais de 15 publicações em conferências internacionais de IA. Especialista em Microsoft Office, formado em Scranton.",
	},
	{
		imageSrc: creator2Img,
		name: "Dra. Ana Piergolini",
		title: "Co-Fundadora & CTO",
		description:
			"Especialista em Redes Neurais, Arquiteturas Transformers e códigos Hexadecimais. Ex-pesquisadora em labs de AI do Vale do Silício. Trabalhou por 10 anos no setor de IA da Nvidia.",
	},
	{
		imageSrc: creator3Img,
		name: "Dr. Lucas Hawking",
		title: "Co-Fundador & Head of Engineering",
		description: "Ph.D. em Inteligência Artificial e Processamento de Linguagem Natural. Lidera a equipe de pesquisa e desenvolvimento da Atena.",
	},
];
</script>
