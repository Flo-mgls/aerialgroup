import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";

Vue.prototype.$axios = axios; // PROTOTYPE AXIOS

/* Récupère les données du panier (localStorage) */
Vue.prototype.$getCart = function () { // PROTOTYPE FONCTION GETCART
  const currentCart = JSON.parse(localStorage.getItem("cart"));
  if (currentCart !== null) {
    for (let i = 0; i < currentCart.length; i++) {
      let product = currentCart[i];
      this.cart[product] = this.cart[product] ? this.cart[product] + 1 : 1;
    }
  }
};

/* Fusionne les données récupérées du panier et les données du fichier JSON pour créer un panier propre et complet */
Vue.prototype.$createCart = function () { // PROTOTYPE FONCTION CREATECART
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
}

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
