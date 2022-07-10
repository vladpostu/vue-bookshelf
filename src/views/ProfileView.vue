<template>
  <div class="main-content">
    <h2 class="mt-4">Profile</h2>
    <div class="mt-4">{{ this.$store.getters.currentUser.displayName }}</div>
    <button @click="signOut" class="btn btn-danger mt-3">Sign out</button>
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
