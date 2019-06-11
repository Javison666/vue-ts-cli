import Vue from 'vue';
import VueRouter, {Route} from 'vue-router'

declare module '*.vue' {
	export default Vue;
}

declare module 'vue/types/vue' {
	interface Vue {
		$fn: any,
		$HTTP_API: any,
		$PAGE_API: any,
		$msg: any,
		$vdt: any,
		// $router: VueRouter,
		// $route: Route,
	}
}
