import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger' // 在控制台打logger，可以看到日志

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production' // 线下调试，debug为true,开启严格模式等

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug, // 线上使用
  _plugins: debug ? [createLogger()] : [],
})