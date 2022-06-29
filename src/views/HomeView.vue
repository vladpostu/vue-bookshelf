<template>
  <div class="home">
    <button @click="googleSignIn">Login with google</button>
  </div>
</template>

<script>
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

export default {
  name: "HomeView",
  methods: {
    googleSignIn() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();

      setPersistence(auth, browserLocalPersistence).then(() => {
        signInWithPopup(auth, provider)
          .then((result) => {
            const credentials = GoogleAuthProvider.credentialFromResult(result);
            const token = credentials.accessToken;
            const user = result.user;

            console.log(token);

            if (user != null) {
              this.$router.push("/about");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      });
    },
  },
  beforeMount() {
    const auth = getAuth();

    if (auth.currentUser) {
      this.$router.push("/about");
    } else {
      this.$router.push("/");
    }
  },
};
</script>
