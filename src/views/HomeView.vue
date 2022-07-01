<template>
  <div class="home">
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
        this.$store.dispatch("setCurrentUser", user);

        if (auth.currentUser) {
          this.$router.push("/my-books");
        } else {
          this.$router.push("/");
        }
      });
    },
  },
};
</script>
