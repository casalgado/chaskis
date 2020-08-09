<template>
  <vue-position-sticky :offsetTop="0">
    <div id="nav">
      <router-link to="/">HOME</router-link> |
      <router-link to="/">BLOG</router-link>
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
      if (this.active) {
        gsap.to("#nav", {
          duration: 2,
          "background-image":
            "linear-gradient(rgb(233, 223, 214), rgb(233, 223, 214))",
          "border-bottom": "1px solid rgb(59, 41, 34)",
        });
      } else {
        gsap.to("#nav", {
          duration: 1,
          "background-image":
            "linear-gradient(rgba(255, 255, 255), rgb(233, 223, 214))",
          "border-bottom": "1px solid rgb(233, 223, 214)",
        });
      }
    },
    activate: function() {
      let sposition = window.scrollY;
      if (sposition > 200) {
        this.active = true;
      } else {
        this.active = false;
      }
      console.log(this.active);
    },
  },
  created() {
    window.addEventListener("scroll", this.navBorder);
    window.addEventListener("scroll", this.activate);
  },
  destroyed() {
    window.removeEventListener("scroll", this.navBorder);
    window.removeEventListener("scroll", this.activateß);
  },
};
</script>

<style scoped>
#nav {
  padding-top: 15px;
  padding-bottom: 15px;
  font-family: "Sue Ellen Francisco", cursive;
  background-image: linear-gradient(rgba(255, 255, 255), rgb(233, 223, 214));
  transition: "background-image" 2s;
  border-bottom: 1px solid rgb(233, 223, 214);
}

#nav a {
}

#nav a.router-link-exact-active {
}
</style>
