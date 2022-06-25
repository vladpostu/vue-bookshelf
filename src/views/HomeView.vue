<template>
  <div class="home">
    <button @click="googleSignIn">Login with google</button>
  </div>
</template>

<script>
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

export default {
  name: "HomeView",
  methods: {
    googleSignIn() {
      const provider = new GoogleAuthProvider();
      const auth = new getAuth();

      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;

          console.log(token, user);
        })
        .then(this.$router.push("/about"))
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
