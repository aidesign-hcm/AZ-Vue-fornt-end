<template>
  <div id="login">
    <logo />
    <v-content>
      <v-container>
        <v-card width="600" class="mx-auto px-2 py-2">
          <v-card-title>
            <h1 class="display-1">Login</h1>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field v-model="email" label="email" prepend-icon="mdi-account-circle" />
              <v-text-field
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                label="password"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword =! showPassword"
              />
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
              <v-btn color="info" @click="onLogin">Login</v-btn>
            <v-spacer />
                <v-btn color="success" to="/signup">Resgister</v-btn>
            
          </v-card-actions>
        </v-card>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
export default {
middleware: 'auth',
auth: 'guest',
  layout: "none",
  data() {
    return {
        showPassword: false,
        email: "",
        name: "",
        password: "",
    };
  },
  methods: {
    async onLogin() {
      try {
        let response = await this.$auth.loginWith('local', { data: {
            email: this.email,
            password: this.password
        } } )
        
        this.$router.push("/")
      } catch (err) {
        console.log(err)
      }
    }
  },
  components:{
    Logo
  }
};
</script>