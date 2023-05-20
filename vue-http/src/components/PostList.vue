<template>
  <div>
    <button @click="getPosts">Load Posts</button>
    <h3 v-if="err">{{ err }}</h3>
    <div v-for="post in posts" :key="post.id">
      <h2>{{ post.id }}</h2>
      <p>{{ post.title }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PostList",
  data() {
    return {
      posts: [],
      err: "",
    };
  },
  methods: {
    async getPosts() {
      try {
        let { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        this.posts = data;
        console.log(data);
      } catch (error) {
        this.err = "Error in fetching posts";
      }
    },
  },
};
</script>

<style scoped></style>
