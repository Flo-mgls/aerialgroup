<!-- COMPOSANT PRODUIT AVEC DETAILS -->

<template>
  <article :id="idProduct">
    <div class="card mb-3 border-0">
      <span>
        <slot name="image"></slot>
      </span>
      <div class="card-body">
        <h2 class="card-title mb-5"><slot name="title"></slot></h2>
        <p class="card-text">
          <slot name="description"></slot>
        </p>
        <p class="card-text">
          <slot name="price"></slot>
        </p>
        <button
          type="button"
          class="btn btn-outline-success btn-lg"
          v-on:click="addToCart"
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "ProductDetailed",
  props: ["idProduct"],
  methods: {
    addToCart() { // Permet l'ajout au panier
      const cart = localStorage.getItem("cart");
      if (cart === null) {
        localStorage.setItem("cart", JSON.stringify([this.idProduct]));
      } else {
        const currentCart = JSON.parse(cart);
        currentCart.push(this.idProduct);
        localStorage.setItem("cart", JSON.stringify(currentCart));
      }
    },
  },
};
</script>