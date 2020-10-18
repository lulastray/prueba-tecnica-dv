<template>
  <div id="app">
    <ErrorMessage />
    <router-view />
  </div>
</template>

<script>
import ErrorMessage from "./components/ErrorMessage";
export default {
  components: {
    ErrorMessage,
  },
};
</script>

<style>
#app {
  font-family: Raleway, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.bk-color {
  background-color: #bde0da;
}

</style>
