<template>
  <div>
    <h2>{{ fname }} {{ lname }}</h2>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "Demo2",
  setup() {
    const state = reactive({
      fname: "rajat",
      lname: "yadav",
    });

    setTimeout(() => {
      state.fname = "adhufs";
      state.lname = "sfgghf";
    }, 2000);
    // return {
    //   state,
    // };
    return toRefs(state);
  },
};
</script>

<style scoped></style>
