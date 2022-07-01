<template>
  <div class="home">
    <button @click="googleSignIn">Login with google</button>
    <div>{{ $store.state.accessToken }}</div>
  </div>
</template>

<script>
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

export default {
  name: "HomeView",
  methods: {
    googleSignIn() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();

      signInWithPopup(auth, provider).then((result) => {
        
        this.$store.dispatch("accessToken", accessToken);

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
