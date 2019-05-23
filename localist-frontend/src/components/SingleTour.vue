<template>
    <v-container fluid grid-list-md class="bg-icons">
        <v-layout row wrap justify-center>
            <v-flex sm10>
                <v-layout row>
                    <v-flex
                        xs6
                        class="display-1 font-weight-bold align-left"
                    >{{info.data && info.data.title}}</v-flex>

                    <!-- <v-flex xs4 class="display-1 font-weight-bold align-right"> 
            $ {{info.data && info.data.price.low}} -
            {{info.data && info.data.price.high}}
                    </v-flex>-->
                </v-layout>

                <!-- 
          *****************
          ** Tour Rating **
          *****************
                -->
                <v-layout row wrap fill-height>
                    <v-flex xs5>
                        <v-rating
                            v-if="reviews"
                            size="30px"
                            color="cyan"
                            class="align-left"
                            half-increments
                            :value="info.data.rating.average"
                            readonly
                        ></v-rating>
                    </v-flex>
                </v-layout>
            </v-flex>

            <!-- 
        **************
        ** Carousel **
        **************
            -->
            <v-flex sm12 md6 pb-4>
                <v-layout wrap>
                    <v-flex xs12>
                        <v-carousel height="400px">
                            <v-carousel-item
                                v-for="(image, i) in info.data && info.data.images"
                                :key="i"
                                :src="info.data.images[i]"
                            ></v-carousel-item>
                        </v-carousel>
                    </v-flex>
                </v-layout>
            </v-flex>

            <!-- 
        ***************
        ** Tour Info **
        ***************
            -->
            <v-flex px-5 mx-5 sm10 md5 pb-4 class="bgc-b" style="text-align: left;">
                <v-layout wrap justify-center my-5>
                    <v-flex xs10 class="title">About The Tour</v-flex>
                    <v-flex xs10>{{info.data && info.data.tour_description}}</v-flex>

                    <!-- 
            ** Location & Duration of the tour  **
                    -->
                    <v-flex xs10>
                        <v-divider></v-divider>
                    </v-flex>
                    <v-flex xs5>
                        <img height="20px" src="../assets/img/location_black.png">
                        {{info.data && info.data.location.city}}, {{info.data && info.data.location.country}}
                    </v-flex>
                    <v-flex xs5>
                        <img height="20px" src="../assets/img/clock_black.png">
                        {{info.data && info.data.duration.short}} - {{info.data && info.data.duration.long}} hours
                    </v-flex>

                    <!-- 
            ** Additional Comments From Tour Guide  **
                    -->
                    <v-flex xs10>
                        <v-divider></v-divider>
                    </v-flex>
                    <v-flex xs10 class="title">Additional Comments From Guide</v-flex>
                    <v-flex xs10>{{info.data && info.data.additional_comments}}</v-flex>

                    <!-- 
            ** show the minimum price for each guest **
                    -->
                    <v-flex xs10>
                        <v-divider></v-divider>
                    </v-flex>
                    <v-flex
                        xs10
                        class="subheading font-weight-bold"
                    >$ {{info.data && info.data.price.low}} (per guest)</v-flex>

                    <v-flex xs10 pt-3 class="align-right">
                        <v-btn
                            dark
                            class="cyan darken-2"
                            :to="'/tours/single/' + this.$route.params.id + '/booking'"
                        >Book Now</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>

        <div class="divider-div">
            <v-divider></v-divider>
        </div>

        <!-- 
      ****************
      ** Guide Info **
      ****************
        -->
        <v-layout pb-5 row wrap justify-center>
            <v-flex pb-4 sm10 md5 style="text-align: left;">
                <v-layout row wrap>
                    <v-flex xs12 class="align-center">
                        <v-img
                            :src="guideImg"
                            width="100%"
                            height="500px"
                        ></v-img>
                    </v-flex>
                </v-layout>
            </v-flex>

            <v-flex px-5 mx-5 pb-4 sm10 md5 class="bgc-b" style="text-align: left;">
                <v-layout wrap justify-center my-5>
                    <v-flex xs10 class="title">{{guideName}}</v-flex>

                    <v-flex xs10>
                        <v-divider></v-divider>
                    </v-flex>

                    <v-flex
                        xs10
                        class="subheading"
                    >{{guideDescription}}</v-flex>
                </v-layout>
            </v-flex>
        </v-layout>

        <div class="divider-div">
            <v-divider></v-divider>
        </div>

        <!-- 
      ******************
      ** Add Tour Review **
      ******************
        -->

        <v-layout>
            <v-flex sm10 style="text-align: left;">
                <v-form v-on:submit.prevent="addReview">
                    <v-rating half-increments v-model="review.rating"></v-rating>
                    <v-text-field v-model="review.title" label="Title"></v-text-field>
                    <v-text-field v-model="review.comment" label="Comment"></v-text-field>
                    <v-btn type="submit">Submit</v-btn>
                </v-form>
            </v-flex>
        </v-layout>

        <div class="divider-div">
            <v-divider></v-divider>
        </div>

        <!-- 
      ******************
      ** Tour Review **
      ******************
        -->

        <v-layout pb-5 row wrap justify-center>
            <v-flex pb-4 sm10 style="text-align: left;">
                <v-expansion-panel v-if="reviews">
                    <v-expansion-panel-content
                        v-for="review in info.data.reviews"
                        :key="review.key"
                    >
                        <template v-slot:header>
                            <div>
                                <div>{{review.user_name}} {{review.date=new Date().toISOString().substr(0, 10)}}</div>
                                <v-rating half-increments :value="review.rating" readonly></v-rating>
                                <div id="reviewTitle">{{review.title}}</div>
                            </div>
                        </template>

                        <v-card>
                            <v-card-text class="subheading">{{review.comment}}</v-card-text>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
import router from "../router";
export default {
    name: "SingleTour",

    data: () => ({
        review: {
            rating: 0,
            title: "",
            comment: "",
            date: new Date().toISOString().substr(0, 10),
            user_key: "",
            user_name: ""
        },
        guideKey: "",
        guideName: "",
        guideDescription: "",
        guideImg: "",
        info: "",
        reviews: false
    }),

    computed: {
        // iconUrl () {
        // return require('./assets/img/background.jpg')
        // The path could be '../assets/img.png', etc., which depends on where your vue file is
        // }
    },
    methods: {
        addReview() {
            var instance = this;
            var formData = { review: instance.review };
            this.$http
                .post("/tour/add/review/" + this.$route.params.id, formData)
                .then(function(response) {
                    router.go();
                })
                .catch(function(error) {
                    alert(error);
                });
        }
    },
    mounted() {
        var instance = this;
        this.$http
            .get("/tour/find/" + this.$route.params.id + "/true")
            .then(function(response) {
                instance.info = response;
                if (response.data.reviews) {
                    instance.reviews = true;
                }

            instance.$http.get("/user/find/" + response.data.user_key)
                    .then(function(response){
                        response = response.data;
                        if (response.name) {
                            instance.guideName = response.name.first + " " + response.name.last;
                        }
                        if (response.description) {
                            instance.guideDescription = response.description;
                        }
                        if (response.image){
                            instance.guideImg = response.image
                        }
                    })
            })
            .catch(error => alert(error))
            .finally(() => (this.loading = false));
        this.review.user_key = this.$store.getters.getUserKey;
        this.review.user_name = this.$store.getters.getName;

    }
};
</script>

<style scoped>
.divider-div {
    padding-top: 20px;
    padding-bottom: 20px;
}

.divider {
    background-color: black;
}
</style>
