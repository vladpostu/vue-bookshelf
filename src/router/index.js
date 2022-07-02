import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import { getAuth, signInWithCustomToken } from "firebase/auth";
// import { store } from "./../store";

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
    component: () => import("../views/InsertNewBookView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const auth = getAuth();

//   if (to.matched.some((record) => record.meta.authRequired)) {
//     if (auth.currentUser) {
//       next();
//       console.log(auth.currentUser);
//     } else {
//       signInWithCustomToken(auth, store.state.credential);
//       next();
//       console.log(auth.currentUser);
//     }
//   } else {
//     next();
//   }
// });

export default router;
