import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      isLogin: true,
      isLoading: false
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});