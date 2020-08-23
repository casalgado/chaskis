<template>
  <div>
    <div class="post-content">
      <div class="post-main">
        <h3 class="title">{{ activePost.title }}</h3>
        <h4 class="subtitle">{{ activePost.subtitle }}</h4>
        <p v-if="activePost.author" class="author">
          {{ activePost.author }}, <br />
          <span>{{ activePost.source }}</span>
        </p>
        <p
          v-for="(par, index) in paragraphs"
          :key="index"
          :id="'par' + index"
          class="paragraph"
        >
          {{ par }}
        </p>
        <p v-if="activePost.footerTitle" class="footer">
          {{ activePost.footerTitle }}, <br />
          <span>{{ activePost.footerText }}</span>
        </p>
        {{ media }}
      </div>
      <div class="post-side">
        <PostMedia
          v-for="(m, i) in media"
          :key="m.url"
          :mediaUrl="m.url"
          :mediaCaption="m.caption"
          :index="i"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PostMedia from "../components/PostMedia";
import { BlogPosts } from "../lib/BlogPosts";
export default {
  name: "PostSingle",
  components: { PostMedia },
  data() {
    return {
      blogPosts: BlogPosts,
      postId: 8,
    };
  },
  computed: {
    activePost: function() {
      return this.blogPosts[this.postId];
    },
    paragraphs: function() {
      return this.blogPosts[this.postId].text.split("\n");
    },
    media: function() {
      let urls = this.activePost.media_urls.split(",");
      let captions = this.activePost.media_captions.split(",");
      if (urls[0] == "") {
        return [];
      } else {
        return urls.map((e, i) => {
          return { url: e, caption: captions[i] };
        });
      }
    },
  },
};
</script>

<style>
.post-content {
  display: grid;
  grid-template-columns: 3fr 2fr;
}

.post-main {
  padding: 15px;
  position: relative;
}

.paragraph {
  text-align: justify;
}
</style>
