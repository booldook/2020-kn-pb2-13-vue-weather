import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Daily from '../views/Daily.vue'
import Weekly from '../views/Weekly.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/daily/:id',
		name: 'daily',
		component: Daily,
	},
	{
		path: '/daily',
		name: 'daily',
		component: Daily,
	},
	{
		path: '/weekly/:id',
		name: 'weekly',
		component: Weekly,
	},
	{
		path: '/weekly',
		name: 'weekly',
		component: Weekly,
	},
	/* {
		path: '/sample/:id',
		name: 'sample',
		this.$router.params.id
		this.$router.query.id
	} */
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from , next) => {
	to.name != 'home' && !from.name ? next({ path: '/' }) : next()
})

export default router
