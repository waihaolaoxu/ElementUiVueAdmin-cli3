import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    asideFolded:false //左侧菜单折叠开关
  },
  mutations: {
    ASIDE_TOGGLE(state, data){
      if(typeof data === 'boolean'){
        state.asideFolded = data;
      }else{
        state.asideFolded = !state.asideFolded
      }
    }
  },
  actions: {

  },
  getters:{
    asideFolded:state => state.asideFolded
  }
})
