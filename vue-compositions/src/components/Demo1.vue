<template>
  <div>
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Demo1",
  setup() {
    let name = ref("Vishwas");
    setTimeout(() => {
      name.value = "test";
      console.log(name);
    }, 2000);
    return {
      name,
    };
  },
};
</script>

<style scoped></style>
