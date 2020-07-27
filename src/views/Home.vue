<template>
  <div id="home">
    <TheBinder />
  </div>
</template>

<script>
import TheBinder from "../components/TheBinder";
export default {
  name: "Home",
  components: { TheBinder },
};
</script>
<style scoped>
#home {
  width: 70%;
  margin: 0 auto;
  background-color: papayawhip;
}
</style>
