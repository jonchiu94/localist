<template>
    <div id="tourList">
        <h1>Tours</h1>
        <router-link to="tours/createtour">Create Tour</router-link>


        <v-container>
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
        </v-container>
        <!-- <div class="container">
            <div class="row">
                <div
                    v-for="tour in tours"
                    :key="tour.key"
                    class="col-sm-3 col-md-3 col-lg-3 pb-2 tour-card"
                >
                    <div
                        class="card h-100 text-center shadow p-3 mb-5 bg-white rounded border-bottom-0"
                    >
                        <img
                            class="card-img-top"
                            src="https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                            alt="Card image cap"
                        >
                        <div class="card-body">
                            <h5 class="card-title">{{tour.title}}</h5>
                            <h6>$ {{tour.price.low}} - {{tour.price.high}}</h6>
                            <p class="card-text" v-html="tour.description"></p>
                            <router-link :to="'/tours/single/' + tour.key">View Info</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    data: () => ({
        tours: []
    }),
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
.tour-card {
    margin-bottom: 90px;
}

.tours {
    margin-top: 40px;
}

.container {
    margin-top: 40px;
}
</style>
