<template>
  <div class="sc-container">
    <div class="sc-header">
      <h2>Blog</h2>
    </div>
    <div class="sc-content">
      <p>{{ content.title }} {{ content.subtitle }}</p>
      <p>{{ content.introduction }}</p>
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
}

.sc-header {
  background-color: rgb(185, 137, 86);
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
</style>
