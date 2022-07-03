<template>
  <nav class="navbar">
    <div class="navbar-content">
      <div class="" id="project_name">vue-bookshelf</div>
      <div class="links">
        <div @click="this.$router.push('/insert-new-book')">
          Insert new book
        </div>
        <div @click="this.$router.push('/my-books')">My Books</div>
        <div>
          <i
            @click="
              this.$store.getters.isAuthenticated
                ? this.$router.push('/profile')
                : this.$router.push('/')
            "
            class="fa-solid fa-user"
          ></i>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
  name: "NavbarComponent",
  methods: {
    signOut() {
      const auth = getAuth();

      this.$store.dispatch("setCurrentUser", {});
      this.$store.dispatch("setAuthenticated", false);

      if (auth.currentUser) {
        signOut(auth);
        this.$router.push("/");
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  border-bottom: 1px solid black;
  width: 100vw;
}

.navbar-content {
  margin: auto;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.links {
  display: flex;
  flex-direction: row;
}

.links > div {
  margin-left: 1rem;
}

.logged {
  background: green;
}
</style>
