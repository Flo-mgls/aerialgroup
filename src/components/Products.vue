<template>
  <article :id="idProduct" class="border-bottom">
    <div class="card mb-3 border-0">
      <div class="row g-0 align-items-center">
        <div class="col-md-4">
          <slot name="image"></slot>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title"><slot name="title"></slot></h2>
            <p class="card-text">
              <slot name="description"></slot>
            </p>
            <p class="card-text">
              <slot name="price"></slot>
            </p>
            <router-link :to="{ name: 'Product', params: { id: idProduct }}" class="btn btn-primary">En savoir plus</router-link>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "Products",
  props: ["idProduct"],
};
</script>

<style scoped lang="scss">
</style>
