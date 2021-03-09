<template>
  <article :id="idProduct">
    <div class="card mb-3">
      <span>
        <slot name="image"></slot>
      </span>
      <div class="card-body">
        <h5 class="card-title"><slot name="title"></slot></h5>
        <p class="card-text">
          <slot name="description"></slot>
        </p>
        <p class="card-text">
          <slot name="price"></slot>
        </p>
        <button type="button" class="btn btn-primary" v-on:click="addToCart">Ajouter au panier</button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "ProductDetailed",
  props: ["idProduct"],
  methods: {
    addToCart () {
      const cart = localStorage.getItem("cart");
      if (cart === null) {
        localStorage.setItem("cart", JSON.stringify([this.idProduct]));
      } else {
        const currentCart = JSON.parse(cart);
        currentCart.push(this.idProduct);
        localStorage.setItem("cart", JSON.stringify(currentCart));
      }
    }
  }
};
</script>

<style scoped lang="scss">
</style>