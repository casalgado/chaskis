<template>
  <div class="sc-container">
    <h1 class="sc-header main-title">
      Blog
    </h1>
    <div class="sc-content">
      <h2 class="content-title">{{ content.title }} {{ content.subtitle }}</h2>
      <p class="content-text">{{ content.introduction }}</p>
    </div>
    <div class="actions">
      <button>leer poema</button>
      <button>mas articulos</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowCase",
  props: {
    section: String,
    content: Object,
  },
};
</script>

<style scoped>
.sc-container {
  background-color: rgb(144, 181, 67);
  border: 1px solid rgb(59, 41, 34);
  margin-top: 45px;
  margin-left: 25%;
  margin-right: 25%;
}

.sc-header {
  background-color: rgb(185, 137, 86);
  margin-top: 0px;
  border-bottom: 1px solid rgb(59, 41, 34);
}

.content-title {
  font-family: "Special Elite", cursive;
}

.content-text {
  font-family: "Merriweather", serif;
  text-align: justify;
  margin-right: 25px;
  margin-left: 25px;
}

.sc-container,
.sc-header {
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
}

.sc-container {
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}

.actions button {
  margin: 15px;
}
</style>
