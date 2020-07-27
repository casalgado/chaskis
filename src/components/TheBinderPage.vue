<template>
  <div id="page-container">
    <div class="page-content">
      <h2 id="title">
        {{ tab.title }}
      </h2>
      <p id="main-text">
        {{ tab.mainText }}
      </p>
    </div>
    <img :src="src" alt="" />
  </div>
</template>

<script>
export default {
  name: "TheBinderPage",
  props: {
    page: Object,
    tab: Object,
    active: Boolean,
  },
  computed: {
    src: function() {
      if (this.active) {
        return require(`../assets/${this.page.backgroundActive}`);
      } else {
        return require(`../assets/${this.page.backgroundInactive}`);
      }
    },
  },
};
</script>

<style scoped>
* {
  border: 1px solid black;
}
img {
  display: block;
}
.page-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  position: absolute;
  width: 100%;
  height: 100%;
}

#page-container {
  position: relative;
}

#title {
  grid-column: span 2;
}

#main-text {
  -webkit-overflow-scrolling: touch;
  overflow: hidden;
}

#main-text::-webkit-scrollbar {
  background: rgb(190, 148, 91) !important;
  border-radius: 5px;
}

#main-text::-webkit-scrollbar-thumb {
  background: rgb(150, 117, 71) !important;
  border-radius: 5px;
}
</style>
