<template>
  <div class="about">
    <div>{{ this.currentUser.name }}</div>

    <button @click="retrive">retrive</button>
    <BookComponent title="Master and Margarita" />
  </div>
</template>

<script>
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { query, where } from "firebase/firestore";
import { db } from "./../App.vue";
import BookComponent from "./../components/BookComponent.vue";

const auth = getAuth();

export default {
  name: "AboutView",
  data() {
    return {
      currentUser: {
        accessToken: this.$store.state.accessToken,
        uid: "",
        name: "",
      },
    };
  },
  beforeMount() {
    if (auth.currentUser) {
      console.log(auth);
    } else {
      signInWithCustomToken(auth, this.accessToken).then((credential) => {
        const user = credential.user;
        this.currentUser.uid = user.uid;
        this.currentUser.name = user.displayName;
      });
    }
  },
  methods: {
    async retrive() {
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
