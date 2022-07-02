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
        console.log(user);

        if (auth.currentUser) {
          this.$store.dispatch("setCurrentUser", user, true);
          this.$router.go("/my-books");
        } else {
          this.$router.push("/");
        }
      });
    },
  },
};
</script>
