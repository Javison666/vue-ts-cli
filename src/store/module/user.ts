import {
	getUserInfo
} from '@/req/user'

export default {
	namespaced: true,
	state: {
		info : null
		// info: {
		// 	username: '',
		// 	clinical: ''
		// }
	},
	// getters:{},
	mutations: {
		setInfo(state, info) {
			state.info = info
		},
	},
	actions: {
		async udtInfo({
			commit
		}) {
			const info = await getUserInfo()
			if (Number(info.code) === 200) {
				commit('setInfo', info.data)
			} else {
				commit('setInfo', null)
			}
		},
		async udtInfoData({ commit }, info) {
			commit('setInfo', info)
		},
	}
}
