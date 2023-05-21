<template>
  <div>
    <h2>{{ name }}</h2>
    <button @click="setName">Change Name</button>

    <h2>{{ count }}</h2>
    <button @click="increaseCount">Increse count</button>

    <h2>{{ first }} {{ last }}</h2>
    <button @click="changeName">Change name</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
export default {
  name: "Methods",
  setup() {
    const count = ref(0);
    const state = reactive({
      first: "Rajat",
      last: "Kumar",
    });
    function increaseCount() {
      count.value++;
    }
    function changeName() {
      state.first = "Amar";
      state.last = "dev";
    }

    return {
      count,
      increaseCount,
      ...toRefs(state),
      changeName,
    };
  },
  data() {
    return {
      name: "Rajat",
    };
  },
  methods: {
    setName() {
      this.name = "Musafir";
    },
  },
};
</script>

<style scoped></style>
