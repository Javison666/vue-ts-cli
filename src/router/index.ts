import Vue from 'vue';
import Router from 'vue-router';
import routes from './router'
import NProgress from 'nprogress'
import $fn from '@/utils/fn';
import PageApi from '@/apis/pageApi'

import {
    getUserInfo,
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
	/*
	if (to.meta && to.meta.auth && to.meta.auth.length > 0) {
		// tslint:disable-next-line:prefer-const
		for (let auth of to.meta.auth) {
			// 登录权限校验
			if (auth === 1) {
				try {
                    const res = await getUserInfo()
                    if ($fn.n(res.code) !== 200) {
						return next(PageApi.login.path)
					} else {
						await window.App.$store.dispatch('user/authInfo', res.data)
						// 若菜单从后台获取
						// if (window.App.$store.state.user.menu.length === 0) {
						// 	await window.App.$store.dispatch('user/updateMenu')
						// }
					}
				} catch (err) {
                    // tslint:disable-next-line:no-console
                    console.log(err)
                    return next(PageApi.login.path)
				}
			}
		}
	}*/
	/* 路由发生变化修改页面title */
	if (to.meta.title) {
		document.title = to.meta.title;
	}
	next();
	/* must call `next` */
})

export default router;
