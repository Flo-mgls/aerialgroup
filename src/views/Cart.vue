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
      cart: {},
      cartDisplayed: [],
    };
  },
  methods: {
    getCart() {
      const currentCart = JSON.parse(localStorage.getItem("cart"));
      if (currentCart !== null) {
        for (let i = 0; i < currentCart.length; i++) {
          let product = currentCart[i];
          this.cart[product] = this.cart[product] ? this.cart[product] + 1 : 1;
        }
      }
    },
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      this.cartDisplayed.forEach(function (product) {
        totalPrice += product.price * product.quantity;
      });

      return Math.round(totalPrice * 100) / 100;
    },
  },
  mounted() {
    this.getCart();
    this.$axios
      .get(`https://florian-magalhaes.fr/MOCK_DATA.json`)
      .then((data) => {
        const products = data.data;
        for (const productID in this.cart) {
          let product = {};
          const productsFilter = products.filter(
            (product) => product.id == productID
          );
          const productTitle = productsFilter[0].title;
          const productPrice = productsFilter[0].price;
          const productQuantity = this.cart[productID];

          product.title = productTitle;
          product.price = productPrice;
          product.quantity = productQuantity;
          this.cartDisplayed.push(product);
        }
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
}
</style>