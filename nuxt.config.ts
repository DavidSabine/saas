// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
		},
	},
	colorMode: {
		disableTransition: true,
		preference: 'light',
	},
	compatibilityDate: '2024-07-11',

	devtools: {
		enabled: false,
	},
	eslint: {
		config: {
			stylistic: {
				commaDangle: 'never',
				braceStyle: '1tbs',
			},
		},
	},
	extends: ['@nuxt/ui-pro'],
	future: {
		compatibilityVersion: 4,
	},
	hooks: {
		// Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
		'components:extend': (components) => {
			const globals = components.filter((c) =>
				['UButton'].includes(c.pascalName),
			)

			globals.forEach((c) => (c.global = true))
		},
	},
	nitro: {
		prerender: {
			routes: ['/', '/docs'],
			crawlLinks: true,
		},
	},
	modules: [
		'@nuxt/content',
		'@nuxt/eslint',
		'@nuxt/fonts',
		'@nuxt/image',
		'@nuxt/ui',
		'@nuxthq/studio',
		'@vueuse/nuxt',
		'nuxt-og-image',
	],

	routeRules: {
		'/api/search.json': { prerender: true },
		'/docs': { redirect: '/docs/getting-started', prerender: false },
	},
	typescript: {
		strict: false,
	},
})
