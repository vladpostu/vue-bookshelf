import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state: {
    accessToken: "",
  },
  mutations: {
    SET_ACCESS_TOKEN(state, accessToken) {
      state.accessToken = accessToken;
    },
  },
  actions: {
    accessToken(context, accessToken) {
      context.commit("SET_ACCESS_TOKEN", accessToken);
    },
  },
  getters: {
    accessToken: function (state) {
      return state.accessToken;
    },
  },
  plugins: [createPersistedState()],
});

export { store };
