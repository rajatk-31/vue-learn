<template>
  <h2>Options - {{ o_firstName }}</h2>
  <h2>Composition - {{ c_firstName }}</h2>
</template>

<script>
import {} from "vue";
export default {
  name: "Data",
  setup() {
    const c_firstName = ref("Kumar");
    return {
      c_firstName,
    };
  },
  data() {
    return {
      o_firstName: "Rajat",
    };
  },
};
</script>

<style scoped></style>
