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

button {
  border-radius: 25px;
  background-color: #0e3a01;
  padding: 5px 25px 5px 25px;
  color: whitesmoke;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  font-family: "Sue Ellen Francisco", cursive;
  font-size: 120%;
}

button:hover {
  background-color: #092701;
}
</style>
