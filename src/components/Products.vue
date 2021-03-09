<template>
  <div>
    <h1>Hello World !</h1>
  </div>
</template>

<script>
export default {
  name: "Products",
  mounted() {
    this.$axios
      .get(`https://florian-magalhaes.fr/MOCK_DATA.json`)
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e)
      });
  },
};
</script>

<style scoped lang="scss">
</style>
