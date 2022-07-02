<template>
  <div class="about">
    <div>{{ this.currentUser.displayName }}'s bookshelf</div>
    <BookComponent title="ciao" />
  </div>
</template>

<script>
import BookComponent from "../components/BookComponent.vue";
// import { collection, getDocs, query, where } from "firebase/firestore";
// import { db } from "./../App.vue";

export default {
  name: "MyBooksView",
  data() {
    return {
      currentUser: this.$store.getters.currentUser,
    };
  },
  methods: {},
  components: {
    BookComponent,
  },
};
</script>
