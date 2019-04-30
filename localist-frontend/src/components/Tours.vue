<template>
    <div id = "tourList">
        <h1>Tours</h1>
        <div>
            <table class="table table-dark">
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
            </table>
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
