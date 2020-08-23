<template>
  <vue-position-sticky :offsetTop="0">
    <div id="nav">
      <router-link to="/">HOME</router-link> |
      <router-link to="/">BLOG</router-link> |
      <router-link to="/">PODCASTS</router-link>
    </div>
  </vue-position-sticky>
</template>

<script>
import { gsap } from "gsap";
export default {
  name: "TheNavBar",
  data() {
    return {
      show: true,
      active: false,
    };
  },
  methods: {
    navBorder: function() {
      let sposition = window.scrollY;
      if (sposition > 200 && !this.active) {
        console.log(sposition);
        this.active = true;
        gsap.to("#nav", {
          duration: 1,
          "border-bottom": "1px solid rgb(59, 41, 34)",
          // "background-image":"linear-gradient(rgb(233, 223, 214), rgb(233, 223, 214))",
        });
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.navBorder);
  },
  destroyed() {
    window.removeEventListener("scroll", this.navBorder);
  },
};
</script>

<style scoped>
#nav {
  padding-top: 15px;
  padding-bottom: 15px;
  font-family: "Sue Ellen Francisco", cursive;
  background-color: white;
  /* background-image: linear-gradient(rgba(255, 255, 255), rgb(233, 223, 214));*/
  border-bottom: 1px solid rgb(233, 223, 214);
}

#nav a {
}

#nav a.router-link-exact-active {
}
</style>
