<template>
  <div>
    <!-- Options Api -->
    <input type="text" placeholder="First Name" v-model="fname" />
    <input type="text" placeholder="Last Name" v-model="lname" />

    <input type="text" placeholder="Hero Name" v-model="heroName" />
    <input type="text" placeholder="Last Name" v-model="firstName" />
    <input type="text" placeholder="Last Name" v-model="lastName" />
  </div>
</template>

<script>
import { ref, toRefs, reactive } from "vue";
export default {
  name: "VModel",
  setup() {
    const heroName = ref("");
    const state = reactive({
      firstName: "",
      lastName: "",
    });

    return {
      heroName,
      ...toRefs(state),
    };
  },
  data() {
    return {
      fname: "",
      lname: "",
    };
  },
};
</script>

<style scoped></style>
