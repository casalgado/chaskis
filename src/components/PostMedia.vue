<template>
  <div class="media-cont" :style="{ top: position }">
    <video v-if="video" width="100%" autoplay muted controls>
      <source :src="src" type="video/mp4" />
    </video>
    <img v-else :src="src" alt="" />
    <p class="caption">{{ mediaCaption }}</p>
  </div>
</template>

<script>
export default {
  name: "PostMedia",
  props: {
    mediaUrl: String,
    mediaCaption: String,
    index: Number,
  },
  data() {
    return {
      position: "50px",
    };
  },
  computed: {
    src: function() {
      return require(`../assets/${this.mediaUrl}`);
    },
    video: function() {
      return this.mediaUrl.substr(this.mediaUrl.length - 3) == "mp4"
        ? true
        : false;
    },
  },
  mounted() {
    this.position = document.getElementById("par0").offsetTop + "px";
  },
};
</script>

<style>
img {
  width: 100%;
}

.media-cont {
  position: relative;
}
</style>
