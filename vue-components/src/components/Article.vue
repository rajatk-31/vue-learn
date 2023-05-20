<script>
export default {
  name: "Articless",
  props: {
    title: String,
    score: Number,
  },
  inheritAttrs: false,
};
</script>
<template>
  <div>
    <h2 v-bind="$attrs">Article</h2>
    <h3>{{ title }} - {{ score }}</h3>
  </div>
</template>
