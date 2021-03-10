<!-- VUE D'UN PRODUIT EN PARTICULIER -->

<template>
  <div class="container">
    <ProductDetailed :idProduct="product.id">
      <template v-slot:image>
        <splide :options="options">
          <splide-slide>
            <img :src="product.image1" :alt="product.title" />
          </splide-slide>
          <splide-slide>
            <img :src="product.image2" :alt="product.title" />
          </splide-slide>
          <splide-slide>
            <img :src="product.image3" :alt="product.title" />
          </splide-slide>
        </splide>
      </template>
      <template v-slot:title>{{ product.title }}</template>
      <template v-slot:description>{{ product.long_description }}</template>
      <template v-slot:price>{{ product.price }} €</template>
    </ProductDetailed>
  </div>
</template>

<script>
import ProductDetailed from "@/components/ProductDetailed.vue";

// IMPORTATION DU SLIDER
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
// FIN IMPORTATION DU SLIDER

export default {
  name: "Product",
  components: {
    ProductDetailed,
    Splide,
    SplideSlide,
  },
  data: () => {
    return {
      product: {}, // Contient les infos du produits en question
      options: { // Option pour le slider
        rewind: true,
        gap: "1rem",
        arrows: false,
        pagination: true,
        perPage: 1,
      },
    };
  },
  mounted() { // Récupère le produit en question grâce à son id passé en paramètre dans l'url
    this.$axios
      .get(`https://florian-magalhaes.fr/MOCK_DATA.json`)
      .then((data) => {
        const products = data.data;
        const oneProduct = products.filter(
          (product) => product.id == this.$route.params.id
        );
        this.product = oneProduct[0];
        document.title = "AerialDiscount | " + this.product.title;
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
    border-radius: 10px;
    height: 20em;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>