<template>
  <v-layout column justify-center align-center>
    <v-container class="mb-6">
      <h3 class="title">Freature Product</h3>
      <v-row >
        <productCard v-for="product in products" :product="product" :key="product.id"  />
      </v-row>
      <h3 class="title">Recent Product</h3>
      <v-row >
        <productCard v-for="product in products" :product="product" :key="product.id" />
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import productCard from "~/components/productCard.vue";

export default {
  async asyncData({$axios}){
    try {
      let response = await $axios.$get('/api/products')
      return {
        products: response.products
      }
      console.log(products)
    } catch(err) {
      console.log(err)
    }
  },
  components: {
    VuetifyLogo,
    productCard
  },
};
</script>
