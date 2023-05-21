<script setup>
import ClickCounter from "./components/ClickCounter.vue";
import HoverCounter from "./components/HoverCounter.vue";
</script>

<template>
  <div>
    <ClickCounter></ClickCounter>
    <HoverCounter></HoverCounter>
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
