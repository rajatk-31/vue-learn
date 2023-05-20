<template>
  <div>
    <form action="" @submit.prevent="createPost">
      <div>
        <label for="userId">Post user id</label>
        <input type="text" v-model="formData.userId" />
      </div>
      <div>
        <label for="title">Post title</label>
        <input type="text" v-model="formData.title" />
      </div>
      <div>
        <label for="body">Post body</label>
        <input type="text" v-model="formData.body" />
      </div>
      <button>Create Post</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CreatePost",
  data() {
    return {
      formData: {
        userId: "",
        title: "",
        body: "",
      },
    };
  },
  methods: {
    async createPost() {
      try {
        let { data } = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          this.formData
        );
        console.log(data);
      } catch (error) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped></style>
