<template>
  <div class="main-content">
    <h2>Profile</h2>
    <button @click="signOut">Sign out</button>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
  name: "ProfileView",
  data() {
    return {};
  },
  methods: {
    signOut() {
      const auth = getAuth();

      if (auth.currentUser) {
        signOut(auth);
      }

      this.$store.dispatch("setCurrentUser", {});
      this.$store.dispatch("setAuthenticated", false);

      this.$router.push("/");
    },
  },
};
</script>
