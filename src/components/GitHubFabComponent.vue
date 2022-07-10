<template>
  <button @click="openRepository">
    <div>
      <img src="./../assets/icons/github_icon.png" />
    </div>
  </button>
</template>

<script>
export default {
  setup() {},
  methods: {
    openRepository() {
      window.open("https://github.com/vladpostu/vue-bookshelf", "_blank");
    },
  },
};
</script>

<style scoped>
button {
  position: fixed;
  bottom: 5%;
  right: 5%;
  outline: none;
  border: none;
  background: none;
  height: 50px;
  width: 170px;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  z-index: 999;
}

button > div {
  position: relative;
  width: 35px;
  overflow: hidden;
}

button > div:hover {
  overflow: visible;
}

button > div:before {
  content: "GitHub Repository";
  position: absolute;
  left: 150%;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.8rem;
  transition: 0.5s;
  white-space: nowrap;
}

button > div:hover::before {
  top: 50%;
  left: -350%;
}

a {
  height: 100px !important;
  border: 1px solid black;
  z-index: 100;
}

button > div > img {
  position: relative;
  width: 35px;
  background: white;
  border-radius: 50%;
}
</style>
