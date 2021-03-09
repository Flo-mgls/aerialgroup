<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <Products v-for="product in products" :key="product.id">
      <template v-slot:image
        ><img :src="product.image1" class="card-img-top" alt="..." />
      </template>
      <template v-slot:title>{{ product.title }}</template>
      <template v-slot:description>{{ product.description }}</template>
      <template v-slot:price>{{ product.price }} $</template>
    </Products>
  </div>
</template>

<script>
import Products from "@/components/Products.vue";

export default {
  name: "Home",
  components: {
    Products,
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
        console.log(data);
        this.products = data.data;
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>
