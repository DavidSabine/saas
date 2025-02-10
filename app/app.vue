<script setup lang="ts">
	const colorMode = useColorMode()
	const color = computed(() => colorMode.value !== 'dark' ? '#181A1C' : '#ffffff')
	useHead({
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ key: 'theme-color', name: 'theme-color', content: color }
		],
		link: [
			{ rel: 'icon', href: '/favicon.png' }
		],
		htmlAttrs: {
			lang: 'en'
		}
	})
	const ogImageUrl = 'https://frontiergunclub.ca/social-card.png'
	useSeoMeta({
		titleTemplate: '%s — Frontier Gun Club',
		ogImage: ogImageUrl,
		twitterImage: ogImageUrl,
		twitterCard: 'summary_large_image'
	})
</script>

<template>
	<div>
		<NuxtLoadingIndicator />
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
		<UNotifications />
	</div>
</template>
