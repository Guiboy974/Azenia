import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/home.vue'

import Shop from '../components/shop.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
        {
			path: '/shop',
			name: 'shop',
			component: Shop
		},
		// ...
	]
})

export default router