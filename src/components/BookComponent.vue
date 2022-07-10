<template>
  <div @click="this.$router.push('/book/' + id)" class="book-container">
    <div class="book-component">
      <span class="book-title text-center">{{ title }}</span>
    </div>
    <div class="text-center mt-3 fw-bold">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
  },
};
</script>

<style scoped>
.book-container {
  display: flex;
  flex-direction: column;
  z-index: 999;
  cursor: pointer;
  margin-right: 2.6rem;
  margin-bottom: 5rem;
}

.book-component {
  position: relative;
  width: 170px;
  height: 200px;
  background: #ecb390;
  box-shadow: 9px 8px 4px rgba(0, 0, 0, 0.25);
  transition: 0.5s;
}

.book-component:hover {
  box-shadow: 19px 12px 4px rgba(0, 0, 0, 0.25);
}

.book-title {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
