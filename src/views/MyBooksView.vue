<template>
  <div class="">
    <div class="my-books main-content">
      <img src="./../assets/images/blob_1.png" class="blob-1" alt="" />
      <img src="./../assets/images/blob_1.png" class="blob-2" alt="" />
      <div class="display-3 fw-bold mt-3">
        <span>{{ this.currentUser.displayName }}'s bookshelf</span>
        <img
          src="./../assets/scribbles/scribble.png"
          alt="scribble"
          width="40"
          class="ms-3"
        />
      </div>
      <div class="books-container mt-5">
        <BookComponent
          v-for="(book, i) in this.books"
          :key="i"
          :id="book.id"
          :title="book.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BookComponent from "../components/BookComponent.vue";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "./../App.vue";

export default {
  name: "MyBooksView",
  data() {
    return {
      currentUser: this.$store.getters.currentUser,
      books: [],
    };
  },
  async mounted() {
    await this.retriveMyBooks();
  },
  methods: {
    async retriveMyBooks() {
      const q = query(collection(db, "books"));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        let book = {
          id: doc.id,
          title: doc.data().title,
        };
        this.books.push(book);
      });
    },
  },
  components: {
    BookComponent,
  },
};
</script>

<style>
.books-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  z-index: 2;
}
</style>
