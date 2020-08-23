<template>
  <div>
    <div class="all-posts"></div>
  </div>
</template>

<script>
import { BlogPosts } from "../lib/BlogPosts";
export default {
  name: "PostsAll",
  data() {
    return {
      blogPosts: BlogPosts,
    };
  },
};
</script>

<style></style>
