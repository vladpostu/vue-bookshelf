<template>
  <div class="background">
    <NavbarComponent />
    <GitHubFabComponent />
    <router-view />
  </div>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import GitHubFabComponent from "./components/GitHubFabComponent.vue";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  setPersistence,
  getAuth,
  browserLocalPersistence,
} from "@firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNwG-MwrePJmSTjWx55tb_dNly1P3p3Gc",
  authDomain: "vue-bookshelf-dbee5.firebaseapp.com",
  projectId: "vue-bookshelf-dbee5",
  storageBucket: "vue-bookshelf-dbee5.appspot.com",
  messagingSenderId: "28834925468",
  appId: "1:28834925468:web:4d195aeb6f37f2f58d5659",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();
setPersistence(auth, browserLocalPersistence);

export default {
  name: "App",
  components: {
    NavbarComponent,
    GitHubFabComponent,
  },
};

export { db };
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  color: #333;
}

.main-content {
  margin: auto;
  width: 90% !important;
  min-height: 100vh;
}

.pointer:hover {
  cursor: pointer;
}

.background {
  overflow-x: hidden !important;
  background: #fcf8e8;
}

.blob-1 {
  position: absolute;
  height: 100vh;
  width: 70%;
  left: 0;
  z-index: 1;
}

.blob-2 {
  position: absolute;
  height: 50vh;
  width: 30%;
  right: 0;
  bottom: 0;
  z-index: 1;
}
</style>
