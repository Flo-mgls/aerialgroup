<template>
  <article :id="idProduct">
    <div class="card mb-3">
      <div class="row g-0 align-items-center">
        <div class="col-md-4">
          <slot name="image"></slot>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title"><slot name="title"></slot></h5>
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
