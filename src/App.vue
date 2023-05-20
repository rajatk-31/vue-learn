<script>
import Greet from "./components/Greet.vue";
import Articless from "./components/Article.vue";
import Popup from "./components/Popup.vue";
export default {
  name: "App",
  components: {
    Greet,
    Articless,
    Popup,
  },
  data() {
    return {
      showPopUp: false,
    };
  },
  methods: {
    closePopup(name) {
      this.showPopUp = false;
      // alert(name);
      console.log(name);
    },
  },
  computed: {},
  watch: {},
};
</script>

<template>
  <button v-show="!showPopUp" @click="showPopUp = true">Show popup</button>
  <!-- <Popup v-show="showPopUp" @close="showPopUp = false"></Popup> -->
  <Popup v-show="showPopUp" @close="closePopup"></Popup>
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
