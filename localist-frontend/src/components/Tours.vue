<template>
    <div id="tourList">
        <h1
            class="cyan--text text--darken-2 mb-2 display-3 font-weight-black font-italic text-xs-center"
        >Tours</h1>

        <v-layout justify-center>
            <v-flex xs3>
                <v-text-field type="text" v-model="asearchTitle" label="Search tours" clearable></v-text-field>
            </v-flex>

            <v-flex xs3 mx-3>
                <v-text-field type="text" v-model="asearchDate" label="Date" clearable></v-text-field>
            </v-flex>

            <v-flex xs3>
                <v-text-field type="number" v-model="asearchGuest" label="# of guests" clearable></v-text-field>
            </v-flex>
        </v-layout>
        <v-container>
            <v-layout row wrap justify-space-between>
                <v-flex v-for="tour in filteredTours" :key="tour.key" xs12 sm5 md3 mx-4 my-4>
                    <base-card
                        color="grey lighten-1"
                        height="350px"
                        dark
                        :append="'/tours/single/' + tour.key"
                    >
                        <v-img
                            :src="tour.main_image"
                            height="300px"
                            width="350px"
                            gradient="rgba(0, 0, 0, .32), rgba(0, 0, 0, .32)"
                        >
                            <v-layout fill-height wrap text-xs-right ma-0>
                                <v-flex xs12>
                                    <v-chip
                                        label
                                        class="mb-2 text-uppercase"
                                        color="cyan darken-2"
                                        text-color="white"
                                        large
                                        @click.stop
                                    >{{ tour.category }}</v-chip>
                                    <h3>{{ tour.title }}</h3>
                                    <div class="caption-text">
                                        ${{tour.price.low}} - ${{tour.price.high}}
                                        <br>
                                        <img height="50px" src="../assets/img/location.png">
                                        {{tour.location.city}}, {{tour.location.country}}
                                        <br>
                                        <img height="50px" src="../assets/img/clock.png">
                                        {{tour.duration.short}} - {{tour.duration.long}} hours
                                    </div>
                                </v-flex>

                                <v-flex row align-end justify-end>
                                    <div class="ratings">({{tour.number_of_ratings}})</div>
                                    <v-rating
                                        size="20px"
                                        color="yellow"
                                        half-increments
                                        :value="tour.rating"
                                        readonly
                                    ></v-rating>
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
        filteredTours: function() {
            return this.tours.filter(tour => {
                try {
                    if (
                        tour.title
                            .toLowerCase()
                            .match(this.asearchTitle.toLowerCase())
                    ) {
                        return true;
                    } else if (
                        tour.location.city
                            .toLowerCase()
                            .match(this.asearchTitle.toLowerCase())
                    ) {
                        return true;
                    } else if (
                        tour.category
                            .toLowerCase()
                            .match(this.asearchTitle.toLowerCase())
                    ) {
                        return true;
                    } else {
                        return false;
                    }
                } catch (error) {}
            });
        }
    },
    mounted() {
        this.$http
            .get("/tour/all")
            .then(response => (this.tours = response.data))
            .catch(error => alert(error))
            .finally(() => (this.loading = false));
        this.asearchTitle = this.$store.getters.getSearchTitle;
        this.asearchDate = this.$store.getters.getSearchDate;
        this.asearchGuest = this.$store.getters.getSearchGuest;
    }
};
</script>

<style scoped>
h3 {
    color: white;
    font-size: 35px;
    font-weight: bold;
}

.caption-text {
    color: white;
    font-size: 20px;
}

.ratings {
    color: white;
    font-size: 20px;
}
</style>
