<template>
    <div id = "tourList">
        <h1>Tours</h1>
        <div>
            <!-- <table class="table table-dark">
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th></th>
                </tr>
                <tr
                    v-for = "tour in tours"
                    :key="tour.key"
                    class = "tour">
                    <th>{{tour.title}}</th>
                    <th v-html="tour.description"></th>
                    <th><router-link :to="'/tours/single/' + tour.key">View Info</router-link></th>
                </tr>
            </table> -->
            <div class="card-header" style="width: 18rem;">
                Featured
            </div>
            <div v-for = "tour in tours"
                    :key="tour.key"
                    class = "tour">
                <div class="card text-center" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">{{tour.title}}</h5>
                        <h6>$ {{tour.price.low}} - {{tour.price.high}}</h6>
                        <p class="card-text" v-html="tour.description"></p>
                        <router-link :to="'/tours/single/' + tour.key">View Info</router-link>
                    </div>
                </div>
            </div>
        </div>
        <router-link to="tours/createtour">Create Tour</router-link>
    </div>
</template>

<script>
    export default {
        data: () => ({
            tours: []

        }),
        mounted() {
            var axios = require('axios');
            axios
                .get(this.$store.state.server_url + '/tours/all')
                .then(response => this.tours = (response.data))
                .catch(error => alert(error))
                .finally(() => this.loading = false)
        }
    }

</script>

<style scoped>


</style>
