<template>
<article>
  </article>
</template>

<script>

export default {
  name: "Product",
  components: {
  },
  data: () => {
    return {
      products: [],
    };
  },
  mounted() {
    this.$axios
      .get(`https://florian-magalhaes.fr/MOCK_DATA.json`)
      .then((data) => {
        const products = data.data;
        this.products = products.filter(product => product.id == this.$route.params.id);
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>