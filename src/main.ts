// <reference path="proj.d.ts"/>
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';

// 进度条
import 'nprogress/nprogress.css';
// iview主题样式
import '@/assets/style/iview/theme.less';
// 自定义全局样式
import '_style/global/index.scss';

import iView from 'iview';
import fn from '@/utils/fn.ts';

// iview全局使用
Vue.use(iView, {
	transfer: true,
	size: 'large',
});
// prop全局
Vue.prototype.$fn = fn;

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
