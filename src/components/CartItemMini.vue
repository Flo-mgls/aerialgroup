<!-- COMPOSANT PRODUIT APPARAISSANT DANS LE BOUTON "PANIER" DU MENU DE NAVIGATION -->

<template>
  <li class="border-bottom">
    <div class="d-flex justify-content-between align-items-center">
      <p class="text-nowrap me-4 my-1"><slot name="product"></slot></p>
      <p class="text-nowrap my-1"><slot name="quantity"></slot></p>
    </div>
  </li>
</template>

<script>
export default {
  name: "CartItemMini",
};
</script>