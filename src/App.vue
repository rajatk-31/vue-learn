<script>
import Card from "./components/Card.vue";

export default {
  name: "App",
  components: {
    Card,
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {},
  computed: {},
  watch: {},
};
</script>

<template>
  <!-- <Card content="Card content 1" /> -->
  <Card>
    <h2>Slot content</h2>
  </Card>
  <Card>
    <img src="https://picsum.photos/200" alt="" />
  </Card>

  <!-- For naemd slots -->
  <Card>
    <template v-slot:header><h2>Image</h2></template>
    <template v-slot:default
      ><img src="https://picsum.photos/seed/picsum/200" alt=""
    /></template>
    <template v-slot:footer><h3>Click me</h3></template>
  </Card>
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
