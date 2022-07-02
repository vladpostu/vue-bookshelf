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
    setCurrentUser(context, user, condition) {
      context.commit("SET_AUTHENTICATED", condition);
      context.commit("SET_CURRENT_USER", user);
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
