<script>
import Greet from "./components/Greet.vue";
export default {
  name: "App",
  components: {
    Greet,
  },
  data() {},
  methods: {},
  computed: {},
  watch: {},
};
</script>

<template>
  <Greet name="Rajat" />
  <Greet name="Rajesh" />
  <Greet name="Ramesh" />
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
