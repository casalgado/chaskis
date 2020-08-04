<template>
  <div class="tab hide-border">
    <img :src="src" alt="" />
    <div v-if="!active && border" class="fake-border"></div>
  </div>
</template>

<script>
export default {
  name: "TheBinderTab",
  props: {
    content: Object,
    active: Boolean,
    border: Boolean,
  },
  computed: {
    src: function() {
      if (this.active) {
        return require(`../assets/${this.content.backgroundActive}`);
      } else {
        return require(`../assets/${this.content.backgroundInactive}`);
      }
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
  display: block;
}

.fake-border {
  position: absolute;
  right: 0px;
  top: 0px;
  width: 0px;
  height: 100%;
  border: 1px solid rgb(59, 41, 34);
}
</style>
