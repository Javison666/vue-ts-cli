// tslint:disable-next-line
let alipayLogin = 'https://auth.alipay.com/login/index.htm?goto=https%3A%2F%2Fopenauth.alipay.com%3A443%2Foauth2%2FpublicAppAuthorize.htm%3Fapp_id%3D2018103161900501%26scope%3Dauth_user%26redirect_uri%3Dhttp%253a%252f%252fwww.jiweiqing.cn%252fapi%252fali%252flogin%26state%3Dlogin';
if (process.env.NODE_ENV === 'development') {
	// tslint:disable-next-line
	alipayLogin = 'https://auth.alipay.com/login/index.htm?goto=https%3A%2F%2Fopenauth.alipay.com%3A443%2Foauth2%2FpublicAppAuthorize.htm%3Fapp_id%3D2018103161900501%26scope%3Dauth_user%26redirect_uri%3Dhttp%253a%252f%252fwww.jiweiqing.cn%252fali%252flogin%26state%3Dlogin';
}

export default {
	other: {
		mail: {
			path: 'mailto:hzez1110@163.com',
			title: 'hzez1110@163.com'
		},
		weibo: {
			path: 'https://weibo.com/u/2497292621',
			title: '会做药的Coder'
		},
		personalBlog: {
			path: '/blog',
			title: '个人博客'
		},
		myGithub: {
			path: 'https://github.com/Javison666',
			title: 'javison666'
		},
		// 技术总结
		skillSummary: {
			vueconf2Doc: {
				path: '/doc/vueconf-2',
				title: 'vuejs第二届开发者大会'
			}
		}
	},
	alipay: {
		login: alipayLogin
	},
	index: {
		path: '/',
		title: '首页'
	},
	// 技术文档
	skillDocs: {
		jjCoreFn: {
			path: 'https://javison666.github.io/jj-core-fn/',
			title: 'jj-core-fn'
		},
		jjBrowserFn: {
			path: 'https://javison666.github.io/jj-browser-fn/',
			title: 'jj-browswer-fn'
		},
		jjLearning: {
			path: 'https://javison666.github.io/jj-learning/',
			title: 'js-utils文档'
		},
		jsUtilsDoc: {
			path: '/doc/js-utils',
			title: 'js-utils文档'
		},
	},
	skillSummary: {
		path: '/skillSummary',
		title: '学习总结'
	},
	microApps: {
		path: '/microApps',
		title: '微应用'
	},
	login: {
		path: '/login',
		title: '登录'
	},
	home: {
		path: '/home',
		children: {
			barManager: {
				path: '/home/barManager',
				title: '网吧管理',
			}
		}
	}
}
