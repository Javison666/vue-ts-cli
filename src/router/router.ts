export default [{
	path: '/',
	name: 'index',
	component: () =>
		import('@/pages/Index/index.vue'),
}, {
	path: '/login',
	name: 'index',
	component: () =>
		import('@/pages/Login/index.vue'),
},
{
	path: '/home',
	component: () =>
		import('@/pages/Home/index.vue'),
	children: [{
		path: '/home',
		redirect: '/home/webCollection'
	}, {
		path: '/home/webCollection',
		meta: {
			auth: [1]
		},
		component: () =>
			import('@/pages/auth/webCollection/index.vue'),
	}, {
		path: '/home/edc',
		meta: {
			auth: [1]
		},
		component: () =>
			import('@/pages/auth/edc/index.vue'),
	}, {
		path: '/home/crc',
		meta: {
			auth: [1]
		},
		component: () =>
			import('@/pages/auth/crc/index.vue'),
	}, {
		path: '/home/patient',
		meta: {
			auth: [1]
		},
		component: () =>
			import('@/pages/auth/user/index.vue'),
	}]
},
{
	path: '/apps',
	component: () =>
		import('@/pages/apps/index.vue'),
	children: [{
		path: '/apps/coin',
		component: () =>
			import('@/pages/apps/coin/index.vue'),
	}, {
		path: '/apps/game',
		component: () =>
			import('@/pages/apps/game/index.vue'),
	}]
},
{
	path: '*',
	name: 'error_404',
	redirect: '/',
}]
