<!-- COMPOSANT PRODUIT APPARAISSANT DANS LA VUE PANIER -->

<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span
      ><slot name="title"></slot
      ><span class="text-muted"> (<slot name="price"></slot> € / pc)</span></span
    >
    <span class="badge bg-success rounded-pill"
      ><slot name="quantity"></slot
    ></span>
  </li>
</template>

<script>
export default {
  name: "CartItem",
};
</script>