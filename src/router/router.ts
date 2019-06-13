export default [
	{
		path: '/',
		name: 'index',
		redirect: '/home',
	},
	{
		path: '/home',
		name: 'home',
		meta: {
			auth: [1],
		},
		component: () => import('@/views/Home/index.vue'),
	},
	{
		path: '/login',
		name: 'login',
		component: () => import(/* webpackChunkName: "login" */ '@/views/Login/index.vue'),
	},
	{
		path: '/logout',
		name: 'logout',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '@/views/Logout.vue'),
	},
]
