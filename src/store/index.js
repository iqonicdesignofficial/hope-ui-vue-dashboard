import { createStore, createLogger } from 'vuex'
import setting from './setting'
const debug = process.env.NODE_ENV !== 'production'
export default createStore({
  state: {
    shareOffcanvas: false
  },
  getters: {
    shareOffcanvas: (state) => state.shareOffcanvas
  },
  mutations: {
    openBottomCanvasCommit(state, payload) {
      state[payload.name] = payload.value
    }
  },
  actions: {
    openBottomCanvasAction({ commit }, payload) {
      commit('openBottomCanvasCommit', payload)
    }
  },
  modules: {
    setting: setting
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
