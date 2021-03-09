<template>
  <div class="container">
      <CartItem/>
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
    };
  },
  mounted() {
    this.$axios
      .get(`https://florian-magalhaes.fr/MOCK_DATA.json`)
      .then((data) => {
        this.products = data.data;
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>