<template>
  <div class="main-content">
    <img src="./../assets/images/blob_1.png" class="blob-1" alt="" />
    <img src="./../assets/images/blob_1.png" class="blob-2" alt="" />

    <form @submit.prevent="insertNewBook">
      <h2 class="mb-4 fs-4 fw-bold">Insert new book</h2>
      <div class="flex">
        <div>
          <div class="input-group">
            <label for="">Title</label>
            <input class="form-control" type="text" v-model="this.book.title" />
          </div>
          <div class="input-group">
            <label for="">Author</label>
            <input
              class="form-control"
              type="text"
              v-model="this.book.author"
            />
          </div>
          <div class="input-group">
            <label for="">Date of publish</label>
            <input
              class="form-control"
              type="date"
              v-model="this.book.dateOfPubblish"
            />
          </div>
          <div class="input-group">
            <label for="">Rating</label>
            <input
              class="form-control"
              type="number"
              max="10"
              min="0"
              v-model="this.book.rating"
            />
          </div>
        </div>
        <div class="input-group summary">
          <label for="">Summary</label>
          <textarea
            class="form-control textarea"
            type="text"
            v-model="this.book.summary"
            cols="30"
            rows="10"
          />
        </div>
      </div>

      <button>
        <span class="button_top"> Insert </span>
      </button>
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
        dateOfPubblish: "",
        summary: "",
        rating: 0,
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
          dateOfPubblish: this.book.dateOfPubblish,
          rating: this.book.rating,
          summary: this.book.summary,
          userId: this.book.userId,
        });
        console.log("Insert with ID: " + docRef);
      } catch (error) {
        return error;
      }

      this.$router.push("/my-books");
    },
  },
};
</script>

<style scoped>
form {
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

.input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 90%;
}

input,
textarea {
  width: 100% !important;
  margin-top: 0.25rem;
  font-size: 0.75rem;
}

/* From uiverse.io by @Voxybuns */
button {
  /* Variables */
  --button_radius: 0.75em;
  --button_color: #e8e8e8;
  --button_outline_color: #000000;
  font-size: 17px;
  font-weight: bold;
  border: none;
  border-radius: var(--button_radius);
  background: var(--button_outline_color);
  width: 130px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 30px;
}

.button_top {
  display: block;
  box-sizing: border-box;
  border: 2px solid var(--button_outline_color);
  border-radius: var(--button_radius);
  padding: 0.75em 1.5em;
  background: var(--button_color);
  color: var(--button_outline_color);
  transform: translateY(-0.2em);
  transition: transform 0.1s ease;
}

button:hover .button_top {
  /* Pull the button upwards when hovered */
  transform: translateY(-0.33em);
}

button:active .button_top {
  /* Push the button downwards when pressed */
  transform: translateY(0);
}

.flex {
  display: flex;
  flex-direction: row;
}

.textarea {
  vertical-align: top !important;
  text-align: start;
}
</style>
