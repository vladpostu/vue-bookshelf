<template>
  <div class="about main-content">
    <div>{{ this.currentUser.displayName }}'s bookshelf</div>
    <BookComponent
      v-for="(book, i) in this.books"
      :key="i"
      :title="book.title"
    />
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
    console.log(this.books);
  },
  methods: {
    async retriveMyBooks() {
      const q = query(collection(db, "books"));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        this.books.push(doc.data());
      });
    },
  },
  components: {
    BookComponent,
  },
};
</script>
