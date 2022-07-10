<template>
  <nav class="navbar">
    <div class="navbar-content">
      <div
        title="Homepage"
        class="fw-bold pointer"
        id="project_name"
        @click="this.$router.push('/')"
      >
        vue-bookshelf
      </div>
      <div class="links">
        <div
          class="pointer"
          title="Insert book"
          @click="this.$router.push('/insert-new-book')"
        >
          <i class="fa-solid fa-plus"></i>
          <span class="ms-2">insert book</span>
        </div>
        <div
          class="pointer"
          title="My books"
          @click="this.$router.push('/my-books')"
        >
          my books
        </div>
        <div title="Profile">
          <i
            @click="
              this.$store.getters.isAuthenticated
                ? this.$router.push('/profile')
                : this.$router.push('/')
            "
            class="fa-solid fa-user pointer"
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
  width: 100vw;
  height: 60px;
}

.navbar-content {
  margin: auto;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
}

.links {
  display: flex;
  flex-direction: row;
  padding-top: 1rem;
}

.links > div {
  margin-left: 2rem;
  border-bottom: 1px solid transparent;
  position: relative;
}

.links > div:after {
  content: "";
  width: 100%;
  height: 1.5px;
  background: transparent;
  position: absolute;
  bottom: -35%;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.2s;
}

.links > div:hover:after {
  background: #333;
  bottom: -15%;
}

.logged {
  background: green;
}
</style>
