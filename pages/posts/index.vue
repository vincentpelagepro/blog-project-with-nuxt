<template>
<div class="posts-page">
  <PostList
    :posts="loadedPosts"
  />
</div>
</template>

<script>
export default {
  name: "index",
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
  }
  // fetch(context) {
  //   return new Promise((resolve, reject) => {
  //     resolve({
  //       loadedPosts: [
  //         {
  //           id: "1",
  //           title: "first post",
  //           previewText: "this is our first post",
  //           thumbnail:
  //             "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
  //         },
  //         {
  //           id: "2",
  //           title: "second post",
  //           previewText: "this is our second post",
  //           thumbnail:
  //             "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
  //         }
  //       ]
  //     });
  //   })
  //     .then(data => {
  //       context.store.commit("setPosts", data.loadedPosts);
  //     })
  //     .catch(e => {
  //       context.error(e);
  //     });
  // },
};
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
