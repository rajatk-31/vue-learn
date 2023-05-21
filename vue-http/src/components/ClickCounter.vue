<template>
  <div>
    <button @click="increment">Clicked {{ count }}</button>
  </div>
</template>

<script>
import CounterMixins from "../mixins/counter";
export default {
  name: "ClickCounter",
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
