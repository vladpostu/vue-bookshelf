import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state: {
    auth: Object,
  },
  mutations: {
    SET_AUTH(state, auth) {
      state.auth = auth;
    },
  },
  actions: {
    setAuth(context, auth) {
      context.commit("SET_AUTH", auth);
    },
  },
  getters: {
    auth: function (state) {
      return state.auth;
    },
  },
  plugins: [createPersistedState()],
});

export { store };
