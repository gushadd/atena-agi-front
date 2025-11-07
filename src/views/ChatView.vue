<template>
	<main class="h-[95vh] w-full grid grid-rows-10">
		<!-- Cabeçalho -->
		<div class="flex justify-between items-center">
			<img class="h-auto max-w-26" src="../assets/logos/atena-logo-full.svg" alt="atena_icon" />

			<button class="btn btn-soft btn-primary">
				<i class="pi pi-sign-out"></i>
				Sair
			</button>
		</div>

		<!-- Chat -->
		<div class="row-span-8 rounded-lg bg-base-200 overflow-y-auto p-2">
			<div v-for="(message, index) in messages" :key="index" :class="message.sender === 'user' ? 'chat chat-end' : 'chat chat-start'">
				<div v-if="message.sender === 'assistant'" class="chat-image avatar">
					<div class="w-10 rounded-full">
						<img alt="atena-icon" src="../assets/logos/atena-logo-icon.svg" />
					</div>
				</div>
				<div class="chat-bubble">{{ message.text }}</div>
			</div>
		</div>

		<!-- Caixa de envio de texto -->
		<div class="flex gap-2 items-center py-5">
			<input v-model="newMessage" @keyup.enter="sendMessage" type="text" placeholder="Digite uma mensagem" class="input input-primary h-full w-full" />
			<button @click="sendMessage" class="btn btn-primary h-full">
				<i class="pi pi-send"></i>
			</button>
		</div>
	</main>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";

const messages = ref([]);
const newMessage = ref("");

const aiMessages = [
	"Olá! Como posso te ajudar hoje?",
	"Entendido. Deixe-me ver o que posso fazer.",
	"Isso é interessante! Conte-me mais.",
	"Não tenho certeza sobre isso. Você pode reformular a pergunta?",
	"Aqui está o que eu encontrei sobre o seu pedido.",
	"Acredito que a melhor solução seja...",
	"Posso te ajudar com mais alguma coisa?",
	"Obrigado por me contatar! Tenha um ótimo dia.",
	"Estou aprendendo coisas novas todos os dias!",
	"Que tal tentarmos uma abordagem diferente?",
];

watch(
	messages,
	(newMessages) => {
		localStorage.setItem("messages", JSON.stringify(newMessages));
	},
	{ deep: true }
);

onMounted(() => {
	const savedMessages = localStorage.getItem("messages");
	if (savedMessages) {
		messages.value = JSON.parse(savedMessages);
	} else {
		messages.value.push({ text: aiMessages[0], sender: "assistant" });
	}
});

const sendMessage = () => {
	if (newMessage.value.trim() === "") return;

	messages.value.push({ text: newMessage.value, sender: "user" });
	newMessage.value = "";

	setTimeout(() => {
		const randomIndex = Math.floor(Math.random() * aiMessages.length);
		messages.value.push({ text: aiMessages[randomIndex], sender: "assistant" });
	}, 500);
};
</script>
