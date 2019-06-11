export default {
    namespaced: true,
    state: {
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        auth: 0
    },
    // getters:{},
    mutations: {
        setWindowWidth(state, val) {
            state.windowWidth = val
        },
        setWindowHeight(state, val) {
            state.windowHeight = val
        },
        setAuth(state, val) {
            state.auth = val
        }
    },
    actions: {
        // 设置当前屏幕宽度
        actionSetWindowWidth({ commit }, val) {
            commit('setWindowWidth', val)
        },
        // 设置当前屏幕高度
        actionSetWindowHeight({ commit }, val) {
            commit('setWindowHeight', val)
        },
        actionSetAuth({ commit }, val) {
            commit('setAuth', val)
        }
    }
}
