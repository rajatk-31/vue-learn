<template>
  <div>
    <!-- Options Api -->
    <input type="text" placeholder="First Name" v-model="name" />

    <!-- Composition Api -->
    <input type="text" placeholder="First Name" v-model="ref_name" />
    <input type="text" placeholder="Last Name" v-model="ref_lname" />

    <!-- Reactive Api -->
    <!-- <input type="text" placeholder="First Name" v-model="r_name" /> -->
  </div>
</template>

<script>
import { ref, toRefs, reactive, watch } from "vue";

export default {
  name: "Watch",
  setup() {
    const ref_name = ref("");
    const ref_lname = ref("");
    watch(
      [ref_name, ref_lname],
      (newVal, oldVal) => {
        console.log("old -- ", oldVal);
        console.log("new -- ", newVal);
      },
      { immediate: true } //to call on fresh reload
    );
    const state = reactive({
      r_name: "",
    });

    return {
      ref_name,
      ref_lname,
    };
  },
  data() {
    return {
      name: "",
    };
  },
  watch: {
    name(newVal, oldVal) {
      console.log("old -- ", oldVal);
      console.log("new -- ", newVal);
    },
  },
};
</script>

<style scoped></style>
