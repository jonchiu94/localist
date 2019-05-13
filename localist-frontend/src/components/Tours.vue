<template>
    <div id="tourList">
        <h1
            class="cyan--text text--darken-2 mb-2 display-3 font-weight-black font-italic text-xs-center"
        >Tours</h1>

        <v-btn large class="white" to="tours/createtour">Create Tour</v-btn>
        <input type="text" v-model="search" placeholder="Search tours">
        <v-container>
            <v-layout wrap justify-space-around>
                <v-flex
                    v-for="tour in filteredTours"
                    :key="tour.key"
                    xs3
                    sm3
                    mx-4
                    my-3
                    class="tour-card"
                >
                    <base-card height="350px" color="grey lighten-1" dark href="#!">
                        <v-img
                            :src="tour.main_image"
                            height="100%"
                            gradient="rgba(0, 0, 0, .32), rgba(0, 0, 0, .32)"
                        >
                            <v-layout fill-height wrap text-xs-right ma-0>
                                <v-flex xs12>
                                    <v-chip
                                        label
                                        class="mb-2 text-uppercase"
                                        color="cyan darken-2"
                                        text-color="white"
                                        small
                                        @click.stop
                                    >{{ tour.category }}</v-chip>
                                    <h3
                                        class="white--text title font-weight-bold mb-2"
                                    >{{ tour.title }}</h3>
                                    <div class="white--text caption">
                                        ${{tour.price.low}} - ${{tour.price.high}}
                                        <br>
                                        {{tour.location.city}}
                                    </div>
                                </v-flex>

                                <v-flex align-self-end>
                                    <v-btn
                                        :to="'/tours/single/' + tour.key"
                                        class="white text-uppercase"
                                        small
                                    >Explore</v-btn>
                                </v-flex>
                            </v-layout>
                        </v-img>
                    </base-card>
                </v-flex>
            </v-layout>
        </v-container>

        <!-- <v-container>
            <v-layout row wrap>
                <v-flex 
                    v-for="tour in tours"
                    :key="tour.key"
                    xs3 sm3 offset-sm1
                    class="tour-card"
                >
                    <v-card>
                        <v-img
                        class="white--text"
                        height="200px"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline">{{tour.title}}</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>

                        <v-card-title>
                            <div>
                                <span>$ {{tour.price.low}} - {{tour.price.high}}</span><br>
                                    <p class="card-text" v-html="tour.description"></p><br>
                            </div>
                        </v-card-title>

                        <v-card-actions>
                            <v-btn flat color="cyan darken-2">Share</v-btn>
                            <v-btn :to="'/tours/single/' + tour.key" flat color="cyan darken-2">Explore</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>-->
    </div>
</template>

<script>
export default {
    data: () => ({
        tours: [],
        search: "",
        asearchTitle: "",
        asearchDate: "",
        asearchGuest: ""
    }),
    computed: {
        // searchTitle: function () {
        //     return this.search= this.$store.getters.getSearchTitle();
        //
        //
        // },
        filteredTours: function() {
            return this.tours.filter(tour => {
                if (tour.title.toLowerCase().match(this.search.toLowerCase())) {
                    return true;
                } else if (
                    tour.location.city
                        .toLowerCase()
                        .match(this.search.toLowerCase())
                ) {
                    return true;
                } else if (
                    tour.category.toLowerCase().match(this.search.toLowerCase())
                ) {
                    return true;
                } else {
                    return false;
                }
            });
        }
    },
    mounted() {
        this.$http
            .get("/tour/all")
            .then(response => (this.tours = response.data))
            .catch(error => alert(error))
            .finally(() => (this.loading = false));
    }
};
</script>

<style scoped>
</style>
