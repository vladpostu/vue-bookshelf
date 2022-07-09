import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import { getAuth, signInWithCustomToken } from "firebase/auth";
import { store } from "./../store";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/my-books",
    name: "my-books",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/MyBooksView.vue"),
  },
  {
    path: "/insert-new-book",
    name: "insert-new-book",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/InsertNewBookView.vue"),
  },
  {
    path: "/profile",
    name: "profle",
    meta: {
      authRequired: true,
    },
    component: () => import("./../views/ProfileView.vue"),
  },
  {
    path: "/book/:id",
    name: "book",
    meta: {
      authRequired: true,
    },
    component: () => import("./../views/BookView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.authRequired)) {
    if (store.getters.isAuthenticated) {
      next();
    } else {
      next({
        path: "/",
      });
    }
  } else {
    next();
  }
});

export default router;
