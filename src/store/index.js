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
  getters: {
    accessToken: (state) => {
      return state.accessToken;
    },
  },
});

export { store };
