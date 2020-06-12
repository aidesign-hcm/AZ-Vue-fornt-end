<template>
  <div id="signup">
    <Logo />
    <v-content>
      <v-container>
        <v-row justify="center">
          <v-col cols="6">
            <h1>Signup</h1>
            <v-form ref="signUpForm" v-model="formValidity" class="row">
                <v-col
                cols="12"
                md="12"
                >
                <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    :counter="10"
                    label="First name"
                    required
                ></v-text-field>
                </v-col>
              <v-col cols="12" sm="12">
                <v-text-field
                  label="Email"
                  type="email"
                  v-model="email"
                  :rules="emailRules"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="12">
                <v-text-field
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  label="Normal with hint text"
                  hint="At least 8 characters"
                  counter
                  @click:append="show1 = !show1"
                ></v-text-field>
              </v-col>

              <v-btn
                type="submit"
                color="primary"
                class="mr-4"
                :disabled="!formValidity"
                @click="userSignup"
                >Submit</v-btn
              >
              <v-btn color="error" to="/login">Login</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
export default {
  middleware: "auth",
  auth:"guest",
  layout: "none",
  data: () => ({
    email: "",
    name: '',
    password: "Password",
    formValidity: false,
    show1: false,
    emailRules: [
      value => !!value || "Email is required.",
      value => value.indexOf("@") !== 0 || "Email should have a username.",
      value => value.includes("@") || "Email should include an @ symbol.",
      value =>
        value.indexOf(".") - value.indexOf("@") > 1 ||
        "Email should contain a valid domain.",
      value => value.includes(".") || "Email should include a period symbol.",
      value =>
        value.indexOf(".") <= value.length - 3 ||
        "Email should contain a valid domain extension."
    ],
    nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match"
    },
    agreeToTerms: false,
    agreeToTermsRules: [
      value =>
        !!value ||
        "You must agree to the terms and conditions to sign up for an account."
    ]
  }),
  methods: {
    async userSignup() {
      try {
        let data = {
          name: this.name,
          email: this.email,
          password: this.password
        }
        let response = await this.$axios.$post('/api/auth/signup', data )
        console.log(response)
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
