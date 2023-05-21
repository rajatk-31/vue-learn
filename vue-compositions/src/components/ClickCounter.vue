<template>
  <div>
    <button @click="incrementCount">Clicked {{ count }}</button>
  </div>
</template>

<script>
// import CounterMixins from "../mixins/counter";
import useCounter from "../composables/useCounter";
export default {
  name: "ClickCounter",
  setup() {
    const { count, incrementCount } = useCounter(100, 10);
    return {
      count,
      incrementCount,
    };
  },
  // mixins: [CounterMixins],
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
