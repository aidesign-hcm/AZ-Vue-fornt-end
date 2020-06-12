<template>
  <section>
    <div class="container vertical-center  mt-4 ">
      <v-col col lg="12"><h2 class="text-center">Update Profile</h2></v-col>
      <v-row class="justify-content-md-center">
        <v-col col lg="9">
          <v-form>
              <v-text-field v-model="name" :label="$auth.$state.user.name" prepend-icon="mdi-account-circle" />
              <v-text-field v-model="email" label="email" prepend-icon="mdi-account-circle" />
              <v-text-field
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                label="password"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword =! showPassword"
              />

            <span class="btn btn-primary" @click="updateProfile"
              >Submit</span>
          </v-form>
          <v-btn @click="onLogout">Logout</v-btn>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
export default {

    data() {
    return {
        name: "",
        email:"",
        password:"",
        showPassword: false,
        };
    },
    methods: {
        updateProfile(){
            console.log("click")
        },
        async onLogout() {
            await this.$auth.logout()
        }
    }
}
</script>

<style></style>
