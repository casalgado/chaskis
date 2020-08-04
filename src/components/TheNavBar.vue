<template>
  <div id="nav">
    <router-link to="/">HOME</router-link> |
    <router-link to="/">BLOG</router-link>
  </div>
</template>

<script>
export default {
  name: "TheNavBar",
};
</script>

<style scoped>
#nav {
  font-family: "Sue Ellen Francisco", cursive;
}

#nav a {
}

#nav a.router-link-exact-active {
}
</style>
