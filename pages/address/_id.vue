<template>
  <!--MAIN-->
  <main>
    <!--REGISTER ADDRESS-->
    <div class="registerAddress mt-3">
      <div class="container-fluid c-section">
        <div class="row">
          <div class="col-sm-3">
            <v-card class="mx-auto" max-width="400" tile>
            </v-card>
          </div>
          <div class="col-sm-6">
            <div class="a-section a-spacing-medium"></div>
            <div class="a-section">
              <h2>Update address</h2>
              <!-- Error Message -->
              <form>
                <div class="a-spacing-medium a-spacing-top-medium">
                    
                  <!-- Country / Region -->
                   <div class="form-group">
                        <label for="exampleFormControlSelect1">Country/Region</label>
                        <select class="a-select-option" v-model="country" >
                            <option 
                                v-for="country in countries"
                                :key="country.alpha2Code"
                                :value="country.name">
                                {{country.name}}
                            </option>
                        </select>
                                            
                    </div>
                  
                  <!-- Full name -->
                  <div class="a-spacing-top-medium">
                    <v-text-field v-model="fullName" label="fullName" :placeholder="address.fullName"/>
                  </div>
                  <!-- Street Address -->
                  <div class="a-spacing-top-medium">
                    <v-text-field
                      v-model="streetAddress"
                      label="Street Address"
                      :placeholder="address.streetAddress"
                    />
                  </div>
                  <!-- City -->
                  <div class="a-spacing-top-medium">
                    <v-text-field 
                    v-model="city" label="City"
                    :placeholder="address.city" />
                  </div>
                  <!-- State -->
                  <div class="a-spacing-top-medium">
                    <v-text-field
                      v-model="state"
                      label="State / Province / Region"
                      :placeholder="address.state"
                    />
                  </div>
                  <!-- Zip Code -->
                  <div class="a-spacing-top-medium">
                    <v-text-field
                      v-model="zipcode"
                      type="number"
                      label="Zip Code"
                    />
                  </div>
                  <!-- Phone Number -->
                  <div class="a-spacing-top-medium">
                    <v-text-field
                      v-model="phoneNumber"
                      type="number"
                      label="Phone Number"
                    />
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                      <span class="a-size-mini"
                        >May be used to assist delivery</span
                      >
                    </div>
                  </div>
                  <div class="a-spacing-base a-spacing-top-medium">
                    <h3>Add delivery instructions</h3>
                  </div>
                  <!-- Delivery Instruction -->
                  <div class="a-spacing-top-medium">
                    <v-textarea
                      v-model="deliverInstructions"
                      label="Provide details such as building description"
                    />
                  </div>
                  <!-- Security code -->
                  <div class="a-spacing-top-medium">
                    <v-text-field
                      v-model="securityCode"
                      type="Do we need a security code or a call box number to access
                      this building?"
                      label="Security Code"
                    />
                  </div>
                  <div></div>
                  <div class="a-spacing-top-large">
                    <span class="a-button-register">
                      <span class="a-button-inner">
                        <v-btn class="a-button-text" type="submit" @click="onUpdateAddress">Upadate address</v-btn>
                      </span>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-sm-3"></div>
        </div>
      </div>
    </div>
    <!--/REGISTER ADDRESS-->
  </main>
  <!--/MAIN-->
</template>
<script>
export default {
  middleware: "auth",
  auth: true,
  data() {
    return {
      fullName: "",
      country: "Viet Nam",
      streetAddress: "",
      city: "",
      state: "",
      zipcode: null,
      phoneNumber: null,
      deliverInstructions: "",
      securityCode: ""
    };
  },
    async asyncData({$axios, params}) {
        try {
        let response = $axios.$get('/api/countries')
        let singleAddress= $axios.$get(`/api/address/${params.id}`)
        let [countriesResponse, addressResponse] = await Promise.all([
            response,
            singleAddress
        ])
        return {
            countries: countriesResponse,
            address: addressResponse.address
        }
        } catch (err){
            console.log(err);
        }
    },
  methods: {
    async onUpdateAddress() {
      try {
        let data = {
          fullName: this.fullName,
          country: this.country,
          streetAddress: this.streetAddress,
          city: this.city,
          state: this.state,
          zipcode: this.zipcode,
          phoneNumber: this.phoneNumber,
          deliverInstructions: this.deliverInstructions,
          securityCode: this.securityCode
        };
        let response = await this.$axios.$put(`/api/address/${this.$route.params.id}`, data);
        if(response.success){
        //    await this.$router.push("/address");
        }
        
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
