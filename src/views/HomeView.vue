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
          const user = result.user;

          if (user != null) {
            this.$router.push("/about");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
