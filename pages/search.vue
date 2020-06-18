<template>
  <v-layout column justify-center align-center>
    <v-container class="mb-6">
      <h3 class="title">Find 3 Products</h3>
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

  components: {
    VuetifyLogo,
    productCard
  },
  watchQuery: ['title'],
  async asyncData({$axios, query}){
      try {
          let products =  await $axios.$post('/api/search', { title : query.title })
          return {
              products
          }
      } catch (err){
          console.log(err)
      }
  }
};
</script>
