<template>
  <v-layout column justify-center align-center>
    <v-container class="mb-6">
        <v-row >
            <v-col md="5" cols="12">
                <v-img
                    class="white--text align-end"
                    :src="product.photo"
                />
            </v-col>
            <v-col md="4" cols="12">
                <h2 class="title">{{product.title}}</h2>
                <p class="description">{{product.description}}</p>
                <h4>Price: {{product.price}} VNĐ</h4>
                <i>Category: {{product.category.type}}</i>
                <i>Owner: {{product.owner.name}}</i>
                <p>Stock: {{product.StockQuantity}}</p>
            </v-col>
            <v-col md="3" cols="12">
                <v-btn to="#" color="primary" @click="addProductToCart(product)">Buy Now</v-btn>
                <v-btn to="#" color="second">Add to cart</v-btn>
            </v-col>
        </v-row>
    </v-container>
  </v-layout>
</template>

<script>
import {mapActions} from "Vuex"
export default {
    async asyncData({ $axios, params }) {
    try {
      let response = await $axios.$get(`/api/products/${params.id}`);
      return {
          product: response.product
      };
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    ...mapActions(["addProductToCart"])
  }

}
</script>

<style>

</style>