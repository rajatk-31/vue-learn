<script>
import Greet from "./components/Greet.vue";
import Articless from "./components/Article.vue";
export default {
  name: "App",
  components: {
    Greet,
    Articless,
  },
  data() {
    return {
      name: "Musafir",
      channel: "Aawara",
    };
  },
  methods: {},
  computed: {},
  watch: {},
};
</script>

<template>
  <Greet name="Rajat" />
  <Greet name="Rajesh" />
  <Greet name="Ramesh" />
  <Greet :name="name" />
  <!-- Need vbinding for other than string values       -->
  <Articless id="test-id" title="hah" :score="50" />
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
