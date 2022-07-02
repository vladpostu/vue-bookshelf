<template>
  <div class="main-content">
    <h2>Insert new book</h2>
    <form @submit.prevent="insertNewBook">
      <div class="input-group">
        <label for="">Title</label>
        <input type="text" v-model="this.book.title" />
      </div>
      <div class="input-group">
        <label for="">Author</label>
        <input type="text" v-model="this.book.author" />
      </div>
      <div class="input-group">
        <label for="">Year of publish</label>
        <input type="text" v-model="this.book.yearOfPublish" />
      </div>
      <div class="input-group">
        <label for="">Summary</label>
        <input type="textarea" v-model="this.book.summary" />
      </div>

      <button type="submit">insert</button>
    </form>
  </div>
</template>

<script>
import { collection, addDoc } from "@firebase/firestore";
import { db } from "./../App.vue";

export default {
  name: "InsertNewBookView",
  data() {
    return {
      book: {
        title: "",
        author: "",
        yearOfPublish: "",
        summary: "",
        userId: this.$store.getters.currentUser.uid,
      },
    };
  },
  methods: {
    async insertNewBook() {
      try {
        const docRef = await addDoc(collection(db, "books"), {
          title: this.book.title,
          author: this.book.author,
          yearOfPublish: this.book.yearOfPublish,
          summary: this.book.summary,
          userId: this.book.userId,
        });
        console.log("Insert with ID: " + docRef.id);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

.input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 400px;
}
</style>
