<template>
  <div class="home">
    <button @click="googleSignIn">Login with google</button>
    <div>{{ $store.state.accessToken }}</div>
  </div>
</template>

<script>
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

export default {
  methods: {
    googleSignIn() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();

      provider.addScope("https://www.googleapis.com/auth/cloud-platform");

      signInWithPopup(auth, provider).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        this.$store.dispatch("accessToken", accessToken);

        if (auth.currentUser) {
          this.$router.push("/about");
        } else {
          this.$router.push("/");
        }
      });
    },
  },
};
</script>
