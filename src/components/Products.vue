<template>
  <article>
    <div class="card" style="width: 18rem">
      <slot name="image"></slot>
      <div class="card-body">
        <h5 class="card-title"><slot name="title"></slot></h5>
        <p class="card-text">
          <slot name="description"></slot>
        </p>
        <p class="text-muted"><slot name="price"></slot></p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "Products",
};
</script>

<style scoped lang="scss">
</style>
