import Vue from "vue";
import Vuex from "vuex";

// Vuex
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      email: "",
      name: "",
      isAuthenticated: false
    }
  },
  getters: {
    isLoading: (state) => state.isLoading,
    user: (state) => state.user,
    isAuthenticated: (state) => state.user.isAuthenticated
  },
  mutations: {
    storeLoading(state, payload) {
      state.isLoading = payload;
    },
    storeUser(state, payload) {
      const { user } = payload;
      user.email !== undefined && (state.user.email = user.email);
      user.name !== undefined && (state.user.name = user.name);
      user.isAuthenticated !== undefined && (state.user.isAuthenticated = user.isAuthenticated);
    }
  },
  actions: {
    storeLoading({ commit }, payload) {
      commit("storeLoading", payload);
    },
    storeUser({ commit }, payload) {
      commit("storeUser", payload);
    }
  },
  modules: {
    //
  }
});
