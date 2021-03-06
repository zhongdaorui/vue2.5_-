import Vue  from 'vue'
import Vuex from 'vuex'

import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'
import state from './state.js'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
          actions,
          getters,
          mutations,
          state,
          plugins: [persistedState()] //添加插件


})