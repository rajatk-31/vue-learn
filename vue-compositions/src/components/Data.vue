<template>
  <h2>Options - {{ o_firstName }}</h2>
  <h2>Composition - {{ c_firstName }}</h2>

  <h2>Composition {{ greet }}</h2>

  <h2>Reactive {{ reactiveGreet }}</h2>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "Data",
  setup() {
    const c_firstName = ref("Ramesh");
    const c_lastName = ref("Yadav");
    const c_heroName = ref("Aawara");
    const greet = `Hello ${c_firstName.value} ${c_lastName.value} a.k.a. ${c_heroName.value}`;
    const state = reactive({
      firstName: "Princess",
      lastName: "Diana",
      heroName: "Wonder Woman",
    });
    const reactiveGreet = ` Hello ${state.firstName}`;
    return {
      c_firstName,
      c_lastName,
      c_heroName,
      state,
      reactiveGreet,
      greet,
    };
  },
  data() {
    return {
      o_firstName: "Rajat",
      o_lastName: "Kumar",
      o_heroName: "Musafir",
    };
  },
};
</script>

<style scoped></style>
