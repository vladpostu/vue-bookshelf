import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state: {
    isAuthenticated: Boolean,
    currentUser: Object,
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
    setCurrentUser(context, user) {
      context.commit("SET_CURRENT_USER", user);
      context.commit("SET_AUTHENTICATED", true);
    },
  },
  getters: {
    currentUser: function (state) {
      return state.currentUser;
    },
  },
  plugins: [createPersistedState()],
});

export { store };
