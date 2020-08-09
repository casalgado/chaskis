<template>
  <div id="header-container">
    <video width="100%" autoplay muted>
      <source src="../assets/chaskis-animation.mp4" type="video/mp4" />
    </video>
    <TheNavBar />
  </div>
</template>

<script>
import TheNavBar from "./TheNavBar";
export default {
  name: "TheHeader",
  components: { TheNavBar },
};
</script>

<style scoped>
#header-container {
  padding-top: 33%;
}

video {
  position: fixed;
  top: -13%;
  left: 0px;
  z-index: -99;
}
</style>
