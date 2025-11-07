<template>
	<main class="flex flex-col lg:gap-20">
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
						um módulo de autenticação resultou em respostas autogeradas fora do escopo original. A falha foi documentada e resolvida, mas a equipe decidiu manter o registro simbólico dessa
						ocorrência nas versões seguintes, acompanhada da frase “Atena lembra.” Desde então, cada nova versão carrega não apenas avanços técnicos, mas também a herança de aprendizado de
						tudo o que veio antes.s"
				/>

				<CompanyInfo
					icon="pi pi-users"
					title="Cultura e Governança"
					content="A cultura organizacional da Atena Labs equilibra inovação e vigilância. A empresa valoriza equipes autônomas, curiosas e comprometidas, mas mantém rígidos processos de
						auditoria e revisão ética de seus sistemas. Por trás de sua aparência moderna, ainda existe uma estrutura herdada dos primeiros dias do laboratório — pastas nomeadas de forma
						incomum, scripts antigos preservados “por precaução” e servidores que carregam identificadores originais do Helios. Internamente, essa prática é vista como parte da identidade
						da empresa: uma lembrança de que todo avanço nasce de um passado que não deve ser esquecido."
				/>

				<CompanyInfo
					icon="pi pi-shield"
					title="Compromisso"
					content="A Atena Labs se compromete com a integridade dos dados, a segurança das informações e o uso ético da inteligência artificial. Todas as suas soluções passam por auditorias
						independentes e seguem políticas internas de governança baseadas em transparência e responsabilidade. Mesmo reconhecendo a complexidade de seus sistemas legados, a empresa
						mantém a convicção de que a sabedoria — humana ou artificial — é resultado de aprendizado contínuo. Por isso, o compromisso da Atena Labs vai além do desenvolvimento
						tecnológico: é uma busca constante por compreender as consequências de cada linha de código, de cada decisão automatizada, e de cada lembrança que a Atena possa carregar.
					</p>s"
				/>
			</section>
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
	</main>
</template>

<script setup>
import CompanyInfo from "@/components/CompanyInfo.vue";
import AtenaDivider from "../components/AtenaDivider.vue";
</script>
