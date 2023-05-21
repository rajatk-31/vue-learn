<script setup>
import Demo1 from "./components/Demo1.vue";
import Demo2 from "./components/Demo2.vue";
</script>

<template>
  <div>
    <Demo2></Demo2>
    <Demo1></Demo1>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
