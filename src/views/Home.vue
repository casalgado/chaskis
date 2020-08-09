<template>
  <div id="home">
    <TheBinder />
    <SectionShowcase section="Blog" :content="blogPost" />
  </div>
</template>

<script>
import TheBinder from "../components/TheBinder";
import SectionShowcase from "../components/SectionShowcase";
import { BlogPosts } from "../lib/BlogPosts";
export default {
  name: "Home",
  components: { TheBinder, SectionShowcase },
  data() {
    return {
      blogPosts: BlogPosts,
    };
  },
  computed: {
    blogPost: function() {
      return this.blogPosts[0];
    },
  },
};
</script>
<style scoped>
#home {
  background-color: rgb(233, 223, 214);
  width: 100%;
  padding-top: 15px;
  margin: 0 auto;
}
</style>
