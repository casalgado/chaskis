<template>
  <div id="page-container">
    <div class="page-content">
      <h1 id="page-title" class="main-title">
        {{ title }}
      </h1>
      <div id="page-text">
        <p v-html="tab.mainText"></p>
      </div>

      <div id="page-image">
        <img src="../assets/main1img.svg" alt="" />
      </div>
      <div id="page-footer">
        <button v-if="tab.buttonText">{{ tab.buttonText }}</button>
        <p id="footer-text" v-else>{{ tab.footerText }}</p>
      </div>
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
    title: function() {
      return this.tab.title.toUpperCase();
    },
  },
};
</script>

<style scoped>
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

/* font-family: "Merriweather", serif; */

#page-title {
  grid-column: span 2;
  align-self: center;
  justify-self: middle;
}

#page-text,
#footer-text {
  font-family: "Special Elite", cursive;
}

#page-text {
  -webkit-overflow-scrolling: touch;
  overflow: hidden;
  text-align: center;
  margin: 10px;
  position: relative;
}

#page-text p {
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}

#page-text::-webkit-scrollbar {
  border-radius: 5px;
}

#page-text::-webkit-scrollbar-thumb {
  border-radius: 5px;
}

#page-image {
  margin: 10px;
}

#page-footer {
  grid-column: span 2;
  align-self: center;
  justify-self: middle;
}
</style>
