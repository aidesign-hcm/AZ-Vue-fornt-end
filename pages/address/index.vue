<template>
  <!--MAIN-->
  <main>
    <!--REGISTER ADDRESS-->
    <div class="registerAddress mt-3">
      <div class="container-fluid c-section">
        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-10">
            <div class="a-section a-spacing-medium">
              <h1 class="a-spacing-medium a-spacing-top-medium">
                Your Addresses
              </h1>
              <!-- Message from Server -->
              <div class="a-section a-spacing-none a-spacing-top-small">
                <b>{{message}}</b>
              </div>
              <div class="a-spacing-double-large">
                <div class="row a-spacing-micro">
                  <div class="col-lg-4 col-md-5 col-sm-12 pb-2">
                    <nuxt-link
                      to="/address/add"
                      class="a-link-normal add-new-address-button"
                      style="text-decoration:none;"
                    >
                      <div class="a-box first-desktop-address-tile">
                        <div class="a-box-inner a-padding-extra-large">
                          <i class="far fa-plus"></i>
                          <h2 class="a-color-tertiary">Add Address</h2>
                        </div>
                      </div>
                    </nuxt-link>
                  </div>
                  <!-- Address -->
                  <div
                    class="col-lg-4 col-md-4 col-sm-12 pl-md-0 pb-2"
                    v-for="(add, index) in address"
                    :key="add._id"
                  >
                    <div
                      class="a-box a-spacing-none normal-desktop-address-tile"
                    >
                      <div class="a-box-inner a-padding-none">
                        <div class="address-section-no-default">
                          <div class="a-spacing-small">
                            <ul class="a-unordered-list a-nostyle a-vertical">
                              <li>
                                <h3>
                                  <!-- Address Fullname -->
                                  <b>{{ add.fullName }}</b>
                                </h3>
                              </li>
                              <!-- Address street address -->
                              <li>
                                streetAddress: {{ add.streetAddress }},
                                {{ add.city }}, {{ add.state }},
                                {{ add.country }}
                              </li>
                              <!-- Address city state zip code -->
                              <li>city, state zipCode: {{ add.zipcode }}</li>
                              <!-- Address country -->
                              <li>{{ add.country }}</li>
                              <!-- Address Phone number -->
                              <li>Phone number: {{ add.phoneNumber }}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <!-- Delete Button -->
                      <div class="edit-address-desktop-link">
                        <nuxt-link :to="/address/ + (add._id)">Edit</nuxt-link>
                        &nbsp; | &nbsp;
                        <a @click="onDeleteAddress(add._id, index)">Delete</a>
                        &nbsp; | &nbsp;
                        <!-- Set Address as Default -->
                        <a @click="onSetDefaultAddress(add._id)">Set as Default</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-3 col-sm-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/REGISTER ADDRESS-->
  </main>
  <!--/MAIN-->
</template>
<script>
export default {
    data(){
        return{
            message: ""
        }
    },
    async asyncData({ $axios }) {
        try {
        let response = await $axios.$get("/api/address");
        return {
            address: response.address
        };
        } catch (err) {
        console.log(err);
        }
    },
    methods: {
        async onDeleteAddress(id, index){
            try {
                let response = await this.$axios.$delete(`/api/address/${id}`);
                if(response.success){
                    this.message = "Delete success";
                    this.address.splice(index, 1)
                }
            } catch (err) {
                this.message = err.message;
                console.log(err);
            }
        },

        async onSetDefaultAddress(id){
            try {
                let response = await this.$axios.$put('/api/address/set/default', {id: id} );
                if(response.success){
                    this.message = "Set default success";
                    await this.$auth.fetchUser()
                }
            } catch (err) {
                this.message = err.message;
                console.log(err);
            }
        }

    }
};
</script>
