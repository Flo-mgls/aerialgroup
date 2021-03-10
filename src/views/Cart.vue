<!-- VUE DU PANIER -->

<template>
  <div class="container">
    <h2 class="mb-5">
      VOTRE PANIER<span v-if="cartDisplayed.length == 0"> EST VIDE</span>
    </h2>
    <ul class="list-group">
      <CartItem v-for="product in cartDisplayed" :key="product.title">
        <template v-slot:title>{{ product.title }}</template>
        <template v-slot:price>{{ product.price }}</template>
        <template v-slot:quantity>{{ product.quantity }}</template>
      </CartItem>
    </ul>
    <div v-if="cartDisplayed.length > 0" class="mt-5">
      <p class="fw-bold">TOTAL: {{ totalPrice }} €</p>
      <button type="button" class="btn btn-lg btn-outline-success">
        Aller au paiement
      </button>
    </div>
  </div>
</template>

<script>
import CartItem from "@/components/CartItem.vue";

export default {
  name: "Cart",
  components: {
    CartItem,
  },
  data: () => {
    return {
      cart: {}, // Panier brut (id, quantity)
      cartDisplayed: [], // Panier propre (objet: title, price, quantity)
    };
  },
  computed: {
    totalPrice() { // Retourne le prix total avec max 2 décimales
      let totalPrice = 0;
      this.cartDisplayed.forEach(function (product) {
        totalPrice += product.price * product.quantity;
      });

      return Math.round(totalPrice * 100) / 100;
    },
  },
  mounted() { // Récupère les données du panier
    document.title = "AerialDiscount | Panier";
    this.$getCart();
    this.$createCart();
  },
};
</script>

<style scoped lang="scss">
.container {
  margin-top: 8em;
}
</style>