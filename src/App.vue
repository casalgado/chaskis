<template>
  <div id="app">
    <TheNavBar />
    <router-view />
  </div>
</template>
<script>
import TheNavBar from "./components/TheNavBar";
export default {
  name: "App",
  components: { TheNavBar },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Sue+Ellen+Francisco&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Special+Elite&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Merriweather&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
