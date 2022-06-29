<template>
  <div class="home">
    <button @click="googleSignIn">Login with google</button>
    <div>{{ $store.getters.accessToken }}</div>
  </div>
</template>

<script>
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

export default {
  methods: {
    googleSignIn() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log(accessToken);
      });
    },
  },
};
</script>
