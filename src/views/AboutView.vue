<template>
  <div class="about">
    <h1>Insert data</h1>
    <form @submit.prevent="insert">
      <input type="text" v-model="name" />
      <button>invia</button>
    </form>
  </div>
</template>

<script>
import { db } from "./../App.vue";
import { collection, addDoc } from "firebase/firestore";

export default {
  methods: {
    insert(event) {
      event.preventDefault();
      console.log(db);
      add();

      async function add() {
        try {
          const docRef = await addDoc(collection(db, "users"), {
            name: "Margherita",
          });
          console.log(docRef.id);
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>
