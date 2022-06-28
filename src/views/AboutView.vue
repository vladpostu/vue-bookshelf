<template>
  <div class="about">
    <h1>Insert data</h1>
    <form @submit.prevent="insert">
      <label>Name</label> <br />
      <input type="text" v-model="books.name" />
      <button>invia</button>
    </form>
    <button @click="retrive">retrive</button>
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
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
    async retrive() {
      const docRef = doc(db, "books", "3ynwgRq1Ppk7t4DVy6D3");
      const docSnap = await getDoc(docRef);

      console.log(docSnap.data());
    },
  },
};
</script>
