<template>
  <div class="about">
    <h1>Insert data</h1>
    <form @submit.prevent="insert">
      <label>Name</label> <br />
      <input type="text" v-model="books.name" />
      <button>invia</button>
    </form>
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./../App.vue";

const auth = getAuth();

export default {
  name: "AboutView",
  data() {
    return {
      books: {
        name: "",
      },
    };
  },
  methods: {
    insert() {
      try {
        const docRef = addDoc(collection(db, "books"), {
          userId: auth.currentUser.uid,
          name: this.books.name,
        });
        console.log(docRef.id);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
