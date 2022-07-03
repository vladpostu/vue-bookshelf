import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state: {
    isAuthenticated: false,
    currentUser: {},
  },
  mutations: {
    SET_CURRENT_USER(state, user) {
      state.currentUser = user;
    },
    SET_AUTHENTICATED(state, condition) {
      state.isAuthenticated = condition;
    },
  },
  actions: {
    setCurrentUser({ commit }, user) {
      commit("SET_CURRENT_USER", user);
    },
    setAuthenticated({ commit }, state) {
      commit("SET_AUTHENTICATED", state);
    },
  },
  getters: {
    currentUser: function (state) {
      return state.currentUser;
    },
    isAuthenticated: function (state) {
      return state.isAuthenticated;
    },
  },
  plugins: [createPersistedState()],
});

export { store };
