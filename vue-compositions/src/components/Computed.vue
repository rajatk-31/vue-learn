<template>
  <div>
    <!-- Options Api -->
    <input type="text" placeholder="First Name" v-model="fname" />
    <input type="text" placeholder="Last Name" v-model="lname" />
    <h2>Options full name is {{ fullname }}</h2>

    <!-- Composition Api -->
    <input type="text" placeholder="First Name" v-model="ref_fname" />
    <input type="text" placeholder="Last Name" v-model="ref_lname" />
    <h2>Composition full name is {{ ref_fullName }}</h2>

    <!-- Reactive Api -->
    <input type="text" placeholder="First Name" v-model="r_fname" />
    <input type="text" placeholder="Last Name" v-model="r_lname" />
    <h2>Reactive full name is {{ r_fullName }}</h2>
  </div>
</template>

<script>
import { ref, toRefs, reactive, computed } from "vue";

export default {
  name: "Computed",
  setup() {
    const ref_fname = ref("");
    const ref_lname = ref("");

    const ref_fullName = computed(function () {
      return `${ref_fname.value} ${ref_lname.value}`;
    });

    const state = reactive({
      r_fname: "",
      r_lname: "",
    });

    const r_fullName = computed(function () {
      return `${state.r_fname} ${state.r_lname}`;
    });

    return {
      ref_fname,
      ref_lname,
      ref_fullName,
      ...toRefs(state),
      r_fullName,
    };
  },
  data() {
    return {
      fname: "",
      lname: "",
    };
  },
  computed: {
    fullname() {
      return `${this.fname} ${this.lname}`;
    },
  },
};
</script>

<style scoped></style>
