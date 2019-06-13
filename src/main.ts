import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

// 进度条
import 'nprogress/nprogress.css';
// 自定义全局样式
import '_style/global/index.scss';

import PAGE_API from '@/apis/pageApi';
import HTTP_API from '@/apis/httpApi';

import fn from '@/utils/fn.ts';

import Message from 'vue-m-message'
import JModal from '_c/modal/index.js'
import JButton from '_c/button/default.vue'

import Component from 'vue-class-component'
Vue.config.productionTip = false;

Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
    'beforeRouteUpdate',
]);

// prop全局
Vue.prototype.$fn = fn;
Vue.prototype.$PAGE_API = PAGE_API;
Vue.prototype.$HTTP_API = HTTP_API;

Vue.use(Message, { name: 'msg' });
Vue.use(JModal);

Vue.component('JButton', JButton);

window.App = new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
