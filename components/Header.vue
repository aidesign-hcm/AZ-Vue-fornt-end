<template>
  <v-app-bar fixed app color="primary" dark>
    <v-toolbar-title>
      <v-btn to="/" text>{{ title }}</v-btn>
    </v-toolbar-title>
    <Search />
    <v-spacer />
    <template v-if="$auth.$state.loggedIn">
        <v-btn to="/profile" text>{{ $auth.$state.user.name }}</v-btn>
        <v-btn to="/address" text>Address</v-btn>
        <v-btn @click="onLogout" text>Logout</v-btn>
      </template>
      <template v-else>
        <v-btn to="/signup">Register</v-btn>
      </template>
    <v-btn to="/cart" text rounded>Cart {{getCartlength}}</v-btn>
    <v-btn to="/placeorder" text rounded>Checkout</v-btn>
    <v-btn @click="toggleTheme" text rounded>Light</v-btn>
    
  </v-app-bar>
</template>

<script>
import { mapGetters } from "Vuex";
import Search from "~/components/Search.vue";

export default {
  data() {
    return {
      title: "mr.3T",
    };
  },
  computed: {
    ...mapGetters(["getCartlength", "loggedIn"])
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    async onLogout(){
        await this.$auth.logout()
    }
  },
  components: {
    Search
  }
};
</script>

<style>
</style>
