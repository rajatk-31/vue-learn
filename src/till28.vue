<script>
export default {
  name: "App",
  data() {
    return {
      volume: 0,
      movie: "",
      movieInfo: {
        title: "",
        actor: "",
      },
    };
  },
  methods: {},
  computed: {},
  watch: {
    volume(newValue, oldValue) {
      if (newValue === 16 && newValue > oldValue) {
        alert(
          "Listening at higher volume for long time may damage your hearing."
        );
      }
    },
    movie: {
      handler(newValue) {
        console.log("Calling api with new movie -- ", newValue);
      },
      immediate: true,
    },
    movieInfo: {
      handler(newValue) {
        console.log("Calling api with new movie -- ", newValue);
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>

<template>
  <div>
    <pre>
      {{ JSON.stringify(movie) }}
    </pre>
  </div>
  <h1>Volume Tracker (0-20)</h1>
  <h3>Current Volume - {{ volume }}</h3>
  <button @click="volume += 2">Increase</button>
  <button @click="volume -= 2">Decrease</button>
  <input type="text" v-model="movie" />
  <input type="text" v-model="movieInfo.title" />
  <input type="text" v-model="movieInfo.actor" />
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
