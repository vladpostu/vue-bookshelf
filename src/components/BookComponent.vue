<template>
  <div @click="this.$router.push('/book/' + id)">{{ title }}</div>
  <div></div>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
  },
};
</script>
