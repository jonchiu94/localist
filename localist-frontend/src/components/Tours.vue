<template>
	<h1>Tours</h1>
    <div id = "tourList">
        <div v-if="loading">Loading... </div>
        <div v-else>
            <div
                v-for = "tour in info"
                class = "tour">
                {{tour.TourTitle}}
            </div>
        </div>
    </div>
</template>


<script>
    var axios = require('axios');
    new Vue({
        el: '#tourList',
        data () {
            return {
                info: null,
                TourID: null,
                TourTitle: null,
                Duration: null,
                Price: null
            }
        },
        mounted () {
            axios
                .get('http://localhost:1337/tours/all')
                .then(response => (this.info = response.data.bpi))
                .catch(error => console.log(error))
                .finally(() => this.loading = false)
        }
    })
</script>

<style scoped>
	
</style>