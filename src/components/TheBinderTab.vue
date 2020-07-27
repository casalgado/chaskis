<template>
  <div class="tab">
    <img :src="src" alt="" />
  </div>
</template>

<script>
export default {
  name: "TheBinderTab",
  props: {
    content: Object,
    active: Boolean,
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
</style>
