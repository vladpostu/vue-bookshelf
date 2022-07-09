<template>{{ this.$route.params.id }}</template>

<script>
import { collection, query, where, getDocs } from "@firebase/firestore";
import { db } from "./../App.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      title: "",
    };
  },
  async beforeMount() {
    const q = query(collection(db, "books"), where("__name__", "==", this.id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  },
};
</script>
