<template>
  <div class="home main-content">
    <button @click="googleSignIn">Login with google</button>
  </div>
</template>

<script>
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default {
  name: "HomeView",
  methods: {
    googleSignIn() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();

      signInWithPopup(auth, provider).then((result) => {
        const user = result.user;

        this.$store.dispatch("setCurrentUser", user);
        this.$store.dispatch("setAuthenticated", true);

        this.$router.push("/my-books");
      });
    },
  },
};
</script>
