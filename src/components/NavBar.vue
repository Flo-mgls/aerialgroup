<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <router-link :to="{ name: 'Home' }" class="navbar-brand" href="#"
        ><img
          src="../assets/logo-ad.svg"
          alt=""
          width="50"
          height="50"
          class="d-inline-block align-top"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-between"
        id="navbarNavDropdown"
      >
        <ul class="navbar-nav">
          <h1 class="d-block d-lg-none">
            <router-link :to="{ name: 'Home' }" class="navbar-brand"
              >AerialDiscount</router-link
            >
          </h1>
          <li class="nav-item">
            <router-link :to="{ name: 'Home' }" class="nav-link"
              >Accueil</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Mon compte</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Panier
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <p
                v-if="cartDisplayed.length == 0"
                class="text-center fw-bold text-wrap mx-2 my-0"
              >
                Votre panier est vide
              </p>
              <div
                v-if="cartDisplayed.length > 0"
                class="container-fluid text-center"
              >
                <div class="d-flex justify-content-between">
                  <p class="h5">Produits:</p>
                  <p class="h5">Qt:</p>
                </div>
                <CartItemMini
                  v-for="product in cartDisplayed"
                  :key="product.title"
                >
                  <template v-slot:product> {{ product.title }} </template>
                  <template v-slot:quantity> {{ product.quantity }} </template>
                </CartItemMini>
                <div
                  class="btn-group mt-2"
                  role="group"
                  aria-label="Basic mixed styles example"
                >
                  <router-link :to="{ name: 'Cart' }"
                    ><button
                      type="button"
                      class="btn btn-outline-success text-nowrap"
                    >
                      Voir le panier
                    </button></router-link
                  >
                  <button
                    type="button"
                    class="btn btn-outline-danger text-nowrap"
                    v-on:click="clearCart"
                  >
                    Tout supprimer
                  </button>
                </div>
              </div>
            </ul>
          </li>
        </ul>
        <h1 class="d-none d-lg-block">
          <router-link :to="{ name: 'Home' }" class="navbar-brand" href="#"
            >AerialDiscount</router-link
          >
        </h1>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import CartItemMini from "@/components/CartItemMini.vue";

export default {
  name: "NavBar",
  components: {
    CartItemMini,
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
    clearCart() {
      localStorage.removeItem("cart");
      this.cart = {};
      this.cartDisplayed = [];
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
</style>