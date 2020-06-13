<template>
  <v-app-bar fixed app color="primary" dark>
    <v-toolbar-title>
      <v-btn to="/" text>{{ title }}</v-btn>
    </v-toolbar-title>
    <v-spacer />
    <template v-if="$auth.$state.loggedIn">
        <v-btn to="/signup" text>{{ $auth.$state.user.name }}</v-btn>
        <v-btn @click="onLogout" text>Logout</v-btn>
      </template>
      <template v-else>
        <v-btn to="/signup">Register</v-btn>
      </template>
    <v-btn to="/cart" text rounded>Cart {{getCartlength}}</v-btn>
    <v-btn to="/Checkout" text rounded>Checkout</v-btn>
    <v-btn @click="toggleTheme" text rounded>Light</v-btn>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "Vuex";
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
  }
};
</script>

<style></style>
