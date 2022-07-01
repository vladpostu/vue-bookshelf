<template>
  <div class="about">
    <div>{{ this.currentUser.displayName }}</div>

    <button @click="retrive">retrive</button>
    <BookComponent title="Master and Margarita" />
  </div>
</template>

<script>
// import { getAuth } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { query, where } from "firebase/firestore";
import { db } from "../App.vue";
import BookComponent from "../components/BookComponent.vue";

export default {
  name: "MyBooksView",
  data() {
    return {
      currentUser: this.$store.getters.currentUser,
    };
  },
  methods: {
    async retrive() {
      console.log();
      const booksRef = collection(db, "books");
      const q = query(
        booksRef,
        where("userId", "==", "UhiHc5OOOpb2pXmSUrGiNbGr5Ap1")
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((snap) => {
        console.log(snap.data());
      });
    },
  },
  components: {
    BookComponent,
  },
};
</script>
