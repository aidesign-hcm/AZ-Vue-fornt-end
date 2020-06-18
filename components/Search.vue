<template>
  <v-dflex class="d-flex">
    <v-text-field
      class="mx-4"
      flat
      hide-details
      label="Search"
      solo-inverted
      v-model="query"
    ></v-text-field>
    <v-btn @click="onSearch" icon>
       <v-icon>mdi-magnify</v-icon>
      </v-btn>
  </v-dflex>
</template>

<script>
export default {
    data(){
      return {
          query: ""
      }  
    },
    methods:{
        onSearch(){
            this.$router.push({
                path: '/search',
                query: {title: this.query}
            })
        }
    }
};
</script>

<style></style>
