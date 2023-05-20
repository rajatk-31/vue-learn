<template>
  <h3 v-for="name in names" :key="name.firstName">
    <!-- {{ name.firstName }} {{ name.lastName }} -->
    <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
  </h3>
</template>

<script>
export default {
  name: "NameList",
  data() {
    return {
      names: [
        {
          firstName: "Rajat",
          lastName: "Kumar",
        },
        {
          firstName: "Ajay",
          lastName: "Sethi",
        },
        {
          firstName: "Ramesh",
          lastName: "Gujral",
        },
        {
          firstName: "Jamal",
          lastName: "Quereshi",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
