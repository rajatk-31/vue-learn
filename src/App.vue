<script>
import Portal from "./components/Portal.vue";

export default {
  name: "App",
  components: {
    Portal,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {},
};
</script>

<template>
  <teleport to="#portal-root">
    <Portal></Portal>
  </teleport>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h4 {
  color: orange;
}
</style>
