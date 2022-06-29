import { createStore } from "vuex";

const store = createStore({
  state: {
    accessToken: "aa",
  },
  mutations: {
    SET_ACCESS_TOKEN(state, accessToken) {
      state.accessToken = accessToken;
    },
  },
  actions: {
    accessToken(context, accessToken) {
      context.commit("SET_ACCESS_TOKEN", accessToken);
      console.log(accessToken);
    },
  },
  getters: {
    accessToken: function (state) {
      return state.accessToken;
    },
  },
});

export { store };
