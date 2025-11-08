<template>
	<section class="flex flex-col rounded-lg overflow-hidden bg-base-200 shadow-md transition-all hover:shadow-xl">
		<img class="h-auto max-w-full" :src="imageSrc" :alt="name" />

		<div class="p-5">
			<h1 class="text-3xl font-bold">{{ name }}</h1>
			<h2 class="text-lg font-semibold text-primary">{{ title }}</h2>
			<p class="pt-2">{{ description }}</p>
		</div>
	</section>
</template>

<script setup>
defineProps({
	imageSrc: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
});
</script>
