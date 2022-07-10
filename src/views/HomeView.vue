<template>
  <div class="home main-content">
    <div class="display-4 text-center fw-bold" id="moto">
      The place to register all your readings
    </div>
    <button @click="googleSignIn" id="google_login_button">
      <i class="fa-brands fa-google fa-lg"></i>
      <span>LOGIN WITH GOOGLE</span>
    </button>
  </div>
  <img
    src="./../assets/images/drawing_woman.png"
    id="drawing_woman"
    alt="drawing woman"
  />
  <img
    src="./../assets/images/united_blobs.png"
    id="united_blobs"
    alt="united blobs"
  />
  <img src="./../assets/images/books.png" id="books" alt="books" />
</template>

<script>
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default {
  name: "HomeView",
  methods: {
    googleSignIn() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();

      signInWithPopup(auth, provider).then((result) => {
        const user = result.user;

        var token = GoogleAuthProvider.accessToken;
        console.log(token);

        this.$store.dispatch("setCurrentUser", user);
        this.$store.dispatch("setAuthenticated", true);

        this.$router.push("/my-books");
      });
    },
  },
};
</script>

<style>
#moto {
  margin-top: 120px;
}

#google_login_button {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  top: 70px;
  background: #4285f4;
  padding: 0.8rem 1.75rem;
  outline: none;
  border: none;
  color: #fefefe !important;
  border-radius: 15px;
  z-index: 99 !important;
}

#google_login_button > * {
  color: #fefefe !important;
  margin: 0 0.3rem;
  font-weight: 600;
}

#drawing_woman {
  width: 35%;
  position: absolute;
  bottom: 0;
  right: 0;
}

#united_blobs {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 70%;
}

#books {
  position: absolute;
  bottom: 0;
  left: 20%;
  width: 12%;
}
</style>
