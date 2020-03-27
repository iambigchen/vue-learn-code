import Vuex from 'vuex'
import Vue from 'vue'

debugger
Vue.use(Vuex)

let moduleA = {
  state: {
    countA: 0
  },
  mutations: {
    incrementA (state) {
      state.countA++
    }
  },
  getters: {
    getAState: state => {
      return 'A = ' + state.countA
    }
  },
  actions: {
    incrementA (context) {
      context.commit('incrementA')
    }
  }
}

let moduleB = {
  state: {
    countB: 0
  },
  mutations: {
    incrementB (state) {
      state.countB++
    }
  },
  getters: {
    getBState: state => {
      return 'B = ' + state.countB
    }
  },
  actions: {
    increment (context) {
      context.commit('incrementB')
    }
  }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

export default store
