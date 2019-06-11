import Vue from 'vue';
import Router from 'vue-router';
import routes from './router'
import NProgress from 'nprogress'
import $fn from '@/utils/fn';

import {
	getUserInfo
} from '@/req/user'

Vue.use(Router);

const router = new Router({
	mode: 'history',
	base: process.env.publicPath,
	routes,
});

router.afterEach((to, from) => {
	NProgress.done();
	window.scrollTo(0, 0)
})

router.beforeEach(async (to, from, next) => {
	NProgress.start();
	// 权限控制
	if (to.meta && to.meta.auth && to.meta.auth.length > 0) {
		// tslint:disable-next-line:prefer-const
		for (let auth of to.meta.auth) {
			// 登录权限校验
			if (auth === 1) {
				try {
					const res = await getUserInfo()
					if ($fn.n(res.code) !== 200) {
						return next('/')
					} else {
						window.App.$store.dispatch('user/udtInfoData', res.data)
					}
				} catch (err) {
					// tslint:disable-next-line:no-console
					console.log(err)
					return next('/')
				}
			}
		}
	}
	/* 路由发生变化修改页面title */
	if (to.meta.title) {
		document.title = to.meta.title;
	}
	next();
	/* must call `next` */
})

export default router;
