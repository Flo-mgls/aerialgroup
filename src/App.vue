<template>
  <div id="app">
    <NavBar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Main",
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  h1,
  h2 {
    font-family: "Poiret One", cursive;
    font-weight: 600;
  }
}
</style>
