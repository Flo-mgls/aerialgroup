<!-- VUE DE L'ACCUEIL -->

<template>
  <div class="container">
    <Products
      v-for="product in products"
      :key="product.id"
      :idProduct="product.id"
    >
      <template v-slot:image
        ><img :src="product.image1" class="card-img-top" :alt="product.title" />
      </template>
      <template v-slot:title>{{ product.title }}</template>
      <template v-slot:description>{{ product.description }}</template>
      <template v-slot:price>{{ product.price }} €</template>
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
      products: [], // Contient tous les produits du fichier JSON
    };
  },
  mounted() { // Récupère les produits du fichier JSON
    document.title = "AerialDiscount | Accueil"
    this.$axios
      .get(`https://florian-magalhaes.fr/MOCK_DATA.json`)
      .then((data) => {
        this.products = data.data;
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>

<style scoped lang="scss">
.container {
  margin-top: 8em;
  img {
    border-radius: 5px;
  }
}
</style>