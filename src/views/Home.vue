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
  width: 70%;
  margin: 0 auto;
}
</style>
