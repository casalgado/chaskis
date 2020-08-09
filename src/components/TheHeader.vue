<template>
  <div>
    <video width="100%" autoplay>
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

<style></style>
