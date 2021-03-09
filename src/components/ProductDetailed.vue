<template>
  <article>
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
        <router-link :to="{ name: 'Product' }" class="btn btn-primary"
          >Ajouter au panier</router-link
        >
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "ProductDetailed",
};
</script>

<style scoped lang="scss">
</style>