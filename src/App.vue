<template>
  <NavbarComponent />
  <router-view />
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";

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
}

.main-content {
  margin: auto;
  width: 90% !important;
}

.pointer:hover {
  cursor: pointer;
}
</style>
