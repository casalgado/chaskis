<template>
  <div id="app">
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>
<script>
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
export default {
  name: "App",
  components: { TheHeader, TheFooter },
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

.main-title {
  font-family: "Sue Ellen Francisco", cursive;
  text-transform: uppercase;
}

body {
  background-color: rgb(233, 223, 214);
  margin: 0px;
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

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: lighter;
}

*:active,
*:focus {
  -moz-outline-style: none;
  outline-style: none;
  outline: none;
}
</style>
