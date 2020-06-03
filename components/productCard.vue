<template>
  <v-col md="3" cols="12">
    <v-card class="mx-auto">
      <v-img
        class="white--text align-end"
        :src="product.productImage"
      >
    
        <v-card-title></v-card-title>
      </v-img>
      <v-card-subtitle class="pb-0">Owner: {{product.owner.name}}</v-card-subtitle>
      <v-card-text class="text--primary">
        <h2><nuxt-link :to="/products/ + (product.id)" >{{product.title}}</nuxt-link></h2>
        <span>{{product.description}}</span>
        <div>Type: {{product.category.type}}</div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="orange" text>
         Price:  {{product.price}}
        </v-btn>
        <v-btn :to="/products/ + (product.id)" color="orange" text>
            Read More
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
    name: 'productCard',
    props: {
    product: {
        type: Object,
        default: function () {
        return {
             owner:{
                 type: Object,
                 default:""
            },
            category:{
                 type: Object,
                 default:""
            }
         }
      }
    }
    },
};
</script>

<style></style>
