<template>
  <div class="main-content">
    <div class="book">
      <h2 class="mb-4 fs-4 fw-bold">{{ this.title }}</h2>
      <div class="flex">
        <div class="group">
          <label for="" class="fs-6">Title</label>
          <div>{{ this.title }}</div>
        </div>
        <div class="group">
          <label for="" class="fs-6">Author</label>
          <div>{{ this.author }}</div>
        </div>
        <div class="group">
          <label for="" class="fs-6">Date of publish</label>
          <div>{{ this.dateOfPubblish }}</div>
        </div>
        <div class="group">
          <label for="" class="fs-6">Rating</label>
          <div>{{ this.rating }} / 10</div>
        </div>
        <div class="group">
          <label for="" class="fs-6">Summary</label>
          <div>{{ this.summary }}</div>
        </div>
        <button @click="deleteBook" class="btn btn-danger mt-3">
          Delete book
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
} from "@firebase/firestore";
import { db } from "./../App.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      title: "",
      author: "",
      dateOfPubblish: "",
      rating: 0,
      summary: "",
    };
  },
  async beforeMount() {
    const q = query(collection(db, "books"), where("__name__", "==", this.id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      this.title = doc.data().title;
      this.author = doc.data().author;
      this.dateOfPubblish = doc.data().dateOfPubblish;
      this.rating = doc.data().rating;
      this.summary = doc.data().summary;
    });
  },
  methods: {
    async deleteBook() {
      await deleteDoc(doc(db, "books", this.id));
      this.$router.push("/my-books");
    },
  },
};
</script>

<style scoped>
.book {
  display: flex;
  flex-direction: column;
  width: 500px;
  min-height: 600px;
  max-width: 90vw;
  border: 3px solid #333;
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translateX(-50%);
  padding: 3.5rem 3rem;
  background: rgba(255, 255, 255, 0.9);
  z-index: 99;
  box-shadow: 15px 12px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
}

.group {
  margin-bottom: 1.5rem;
}

.group > div {
  font-weight: bold;
}

button {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>
