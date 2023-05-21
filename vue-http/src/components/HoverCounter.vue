<template>
  <div>
    <button @mouseover="increment">Hover {{ count }}</button>
  </div>
</template>

<script>
import CounterMixins from "../mixins/counter";
export default {
  name: "HoverCounter",
  mixins: [CounterMixins],
  //   data() {
  //     return {
  //       count: 0,
  //     };
  //   },
  //   methods: {
  //     increment() {
  //       this.count += 1;
  //     },
  //   },
};
</script>

<style scoped></style>
