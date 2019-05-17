<template>
  <div>
    <v-content>
      <section>
        <v-img
          :src="require('@/assets/background-1.jpeg')"
          gradient="rgba(0, 0, 0, .22), rgba(0, 0, 0, .22)"
          height="450"
        >
          <v-layout column align-center class="white--text">
              <v-flex xs12 mt-5>
                <h1
                  class="white--text text--darken-2 display-3 font-weight-black font-italic text-xs-center"
                >Localist</h1>
                <div
                  class="white--text text--darken-2 subheading text-xs-center"
                >by TEAM 24</div>
              </v-flex>

              <v-flex xs12 mt-5>
                <v-toolbar
                  color="grey lighten-3"
                  floating
                  height="60"
                  class="rounded-border"
                >
                  <v-layout>
                    <v-flex>
                      <!-- <v-autocomplete
                        v-model="select"
                        :loading="loading"
                        :items="items"
                        :search-input.sync="search"
                        cache-items
                        class="mx-3"
                        flat
                        hide-no-data
                        hide-details
                        label="Search"
                      ></v-autocomplete> -->
                      <v-text-field
                        hide-details
                        label="Search"
                        v-model="search"
                      ></v-text-field>
                    </v-flex>

                    <v-flex mx-3>
                      <v-menu
                        v-model="menu"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        lazy
                        transition="scale-transition"
                        offset-y
                        full-width
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            hide-details
                            v-model="date"
                            readonly
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="date"
                          @input="menu = false"
                          no-title
                        ></v-date-picker>
                      </v-menu>
                    </v-flex>

                    <v-flex>
                        <v-text-field
                            hide-details
                            v-model="guest"
                            type="number"
                            label="#. of guest"
                        ></v-text-field>
                    </v-flex>

                    <v-flex ml-3>
                      <v-toolbar-items>
                        <!-- <v-btn @click="addSearch" large class="cyan darken-2 white--text"> Search </v-btn> -->
                        <v-btn @click="addSearch" icon large>
                          <v-icon hide-details>search</v-icon>
                        </v-btn>
                      </v-toolbar-items>
                    </v-flex>
                  </v-layout>
                </v-toolbar>
            </v-flex>

            <v-flex xs12 align-self-center>
              <p class="subheading">The BEST way to experience local culture.</p>
            </v-flex>
          </v-layout>
        </v-img>
      </section>

      <section>
        <FeaturedTours></FeaturedTours>
      </section>

      <section>
        <v-parallax :src="require('@/assets/background-camp.jpeg')" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text font-weight-black mb-3 text-xs-center">
              <span
              class="black-shadow"
              >Meet interesting people. Create memorable stories.</span>
            </div>
            <v-btn
              class="cyan darken-2 mt-5 font-weight-black"
              dark
              large
              href="#"
            >Host Your Own Tour</v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout column wrap class="my-4" align-center>
            <v-flex mb-3 xs12>
              <h1 class="display-1">We Value ...</h1>
            </v-flex>

            <v-flex xs12>
              <v-container grid-list-xl>
                  <v-layout row wrap align-center>
                    <v-flex align-self-start xs12 md4>
                      <v-card class="elevation-0 transparent">
                        <v-card-text class="text-xs-center">
                            <v-icon
                              x-large
                              class="cyan--text text--darken-2"
                            >color_lens</v-icon>
                        </v-card-text>
                        <v-card-title primary-title class="layout justify-center">
                          <div class="headline text-xs-center">Customizable</div>
                        </v-card-title>
                        <v-card-text>
                          We are huge believers in customized tours, and bringing unique memories home with you, wherever you go.
                          You needs and interests aren't the same as anyone elses, so why look for the same tours?
                          We support guide-to-tourist communication, so that everyone involved can be certain of what is going to work best for them.
                        </v-card-text>
                      </v-card>
                    </v-flex>

                    <v-flex align-self-start xs12 md4>
                      <v-card class="elevation-0 transparent">
                        <v-card-text class="text-xs-center">
                          <v-icon
                            x-large
                            class="cyan--text text--darken-2"
                          >flash_on</v-icon>
                        </v-card-text>
                        <v-card-title primary-title class="layout justify-center">
                          <div class="headline">Fun</div>
                        </v-card-title>
                        <v-card-text>There's no point in travelling if you aren't going to have some fun, right? Find independent, local experts in your travel destination. There's no doubt that the people who are passionate about their home will want to share all the fun that is to be had there with you! Find your the people that share your niche with you!</v-card-text>
                      </v-card>
                    </v-flex>

                    <v-flex align-self-start xs12 md4>
                      <v-card class="elevation-0 transparent">
                        <v-card-text class="text-xs-center">
                          <v-icon x-large class="cyan--text text--darken-2">shield</v-icon>
                        </v-card-text>
                        <v-card-title primary-title class="layout justify-center">
                          <div class="headline text-xs-center">Secured</div>
                        </v-card-title>
                        <v-card-text>We stand behind our guides 100%. We believe in care-free travelling, that should concern you is showing up on time and having fun, or seeing what you came to see! Our secure payment process is risk-free, quick, and allows you to worry about what's important; having a great tour.</v-card-text>
                      </v-card>
                    </v-flex>
                  </v-layout>
              </v-container>
            </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax :src="require('@/assets/background-3.jpeg')" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text font-weight-black mb-3 text-xs-center">
              <span
                class="black-shadow"
              >Customized local tours that can't be found anywhere else.</span>
            </div>
            <v-btn
              class="cyan darken-2 mt-5 font-weight-black"
              dark
              large
              href="#"
            >Get Started</v-btn>
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
                  Team24 is a company made of 4 developers and travelers, 
                  all with a common goal: to make tours cheaper, more enjoyable, 
                  and more available for everyone.  Localist is the product child 
                  of a vision where the tourism industry is given back to the person 
                  that has all the local knowledge: you, the localist.
                </v-card-text>
              </v-card>
            </v-flex>

            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact us</div>
                </v-card-title>
                <v-list class="transparent">
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
                      <v-list-tile-title href='&#109;ailt&#111;&#58;%6&#67;%6&#70;&#99;a&#108;&#105;s&#116;&#64;&#37;6C&#37;6Fc&#97;&#108;i&#37;73%74%2E&#99;o&#109;'>loc&#97;list&#64;loc&#97;lis&#116;&#46;com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </v-content>
  </div>
</template>

<script>
import router from "../router";
import FeaturedTours from "./FeaturedTours.vue";
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    search: "",
    guest: "",
    menu: false,
    modal: false,

    loading: false,
    items: ["Biking", "Hiking", "Wine"],
    select: null
  }),
  methods: {
    addSearch() {
      this.search
        ? this.$store.commit("setSearchTitle", this.search)
        : (this.search = "");
      // this.$store.commit("setSearchTitle", this.search);
      this.$store.commit("setSearchDate", this.date);
      this.$store.commit("setSearchGuest", this.guest);
      router.push("/tours");
    }
  },
  components: { FeaturedTours }
};
</script>

<style>
.black-shadow {
  text-shadow: 1px 1px 2px black;
}

  .rounded-border{
    border-radius: 5px;
  }

    .none-dec{
      text-decoration: none;
    }
</style>


