<template>
	<div class="flex flex-col items-center gap-2 p-2">
		<i :class="icon" class="bg-primary text-white text-2xl rounded-lg p-3"></i>
		<h6 class="text-xl font-bold mb-2">{{ title }}</h6>
		<p>
			{{ content }}
		</p>
	</div>
</template>

<script setup>
defineProps({
	icon: String,
	title: String,
	content: String,
});
</script>
