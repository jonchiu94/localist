<template>
    <div>
        <v-content>
          <section>
            <v-parallax src="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1866&q=80" height="550">
              <v-layout
                column
                align-center
                justify-center
                class="white--text"
              >
                <h1 class="cyan--text text--darken-2 mb-2 mt-5 display-3 font-weight-black font-italic text-xs-center">Localist</h1>
                <div class="cyan--text text--darken-2 subheading mb-5 text-xs-center">by TEAM 24</div>
                
            <v-layout row wrap justify-space-around >
                <v-flex md3>
                    <v-text-field
                        label="What"
                        solo
                        background-color="white"
                    ></v-text-field>
                </v-flex>
                <v-flex md3>
                    <v-text-field
                        label="When"
                        solo
                        background-color="white"
                    ></v-text-field>
                </v-flex>
                <v-flex md3>
                    <v-text-field
                        label="#. of travellers"
                        solo
                        background-color="white"
                    ></v-text-field>
                </v-flex>
                <v-flex md12>
                    <v-btn large class="cyan darken-2 white--text"> Search </v-btn>
                </v-flex>
            </v-layout>

              </v-layout>
            </v-parallax>
          </section>

          <section>
            <v-layout
              column
              wrap
              class="my-5"
              align-center
            >
              <v-flex xs12 sm4 class="my-3">
                <div class="text-xs-center">
                  <h2 class="headline">Probably, the BEST way to experience the local culture.</h2>
                </div>
              </v-flex>
              <v-flex xs12>
                <v-container grid-list-xl>
                  <v-layout row wrap align-center>
                    <v-flex xs12 md4>
                      <v-card class="elevation-0 transparent">
                        <v-card-text class="text-xs-center">
                          <v-icon x-large class="cyan--text text--darken-2">color_lens</v-icon>
                        </v-card-text>
                        <v-card-title primary-title class="layout justify-center">
                          <div class="headline text-xs-center">Customized</div>
                        </v-card-title>
                        <v-card-text>
                          Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                          Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex xs12 md4>
                      <v-card class="elevation-0 transparent">
                        <v-card-text class="text-xs-center">
                          <v-icon x-large class="cyan--text text--darken-2">flash_on</v-icon>
                        </v-card-text>
                        <v-card-title primary-title class="layout justify-center">
                          <div class="headline">Fast</div>
                        </v-card-title>
                        <v-card-text>
                          Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                          Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex xs12 md4>
                      <v-card class="elevation-0 transparent">
                        <v-card-text class="text-xs-center">
                          <v-icon x-large class="cyan--text text--darken-2">shield</v-icon>
                        </v-card-text>
                        <v-card-title primary-title class="layout justify-center">
                          <div class="headline text-xs-center">Secured</div>
                        </v-card-title>
                        <v-card-text>
                          Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                          Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                        </v-card-text>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
            </v-layout>
          </section>

          <section>
            <v-parallax src="https://images.unsplash.com/photo-1530735606451-8f5f13955328?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" height="380">
              <v-layout column align-center justify-center>
                <div class="headline white--text font-weight-black mb-3 text-xs-center">Custom local tour that cannot find in traditional tourist means.</div>
                <v-btn
                  class="cyan darken-2 mt-5 font-weight-black"
                  dark
                  large
                  href="#"
                >
                  Get Started
                </v-btn>
              </v-layout>
            </v-parallax>
          </section>

          <section>
            <v-container grid-list-xl>
              <v-layout row wrap justify-center class="my-5">
                <v-flex xs12 sm4>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Our Story</div>
                    </v-card-title>
                    <v-card-text>
                      Localist is ... mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 sm4 offset-sm1>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Contact us</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    </v-card-text>
                    <v-list class="transparent">
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon class="blue--text text--lighten-2">phone</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>604-123-4567</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon class="blue--text text--lighten-2">place</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Vancouver, Canada</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon class="blue--text text--lighten-2">email</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>team24@localist.com</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </section>

          <v-footer class="blue darken-2">
            <v-layout row wrap align-center>
              <v-flex xs12>
                <div class="white--text ml-3">
                  Made with
                  <v-icon class="red--text">favorite</v-icon>
                  by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
                  and <a class="white--text" href="https://github.com/vwxyzjn">Costa Huang</a>
                </div>
              </v-flex>
            </v-layout>
          </v-footer>
        </v-content>
    </div>
</template>

<script>
</script>

<style>

</style>


