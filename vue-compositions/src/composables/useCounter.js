import { ref } from "vue";

function useCounter(initialCount = 0, stepSize = 1) {
  const count = ref(initialCount);
  function incrementCount() {
    count.value += stepSize;
    console.log(count.value);
  }

  return {
    count,
    incrementCount,
  };
}

export default useCounter;
