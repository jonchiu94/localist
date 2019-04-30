<template>
    <div id = "tourList">
        <h1>Tours</h1>
        <div>
            <table class="table table-dark">
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price <h1>Low</h1></th>
                    <th>Price High</th>
                    <th>Duration Long</th>
                    <th>Duration Short</th>
                </tr>
                <tr
                    v-for = "tour in tours"
                    :key="tour.key"
                    class = "tour">
                    <th>{{tour.title}}</th>
                    <th>{{tour.description}}</th>
                    <th>{{tour.price.low}}</th>
                    <th>{{tour.price.high}}</th>
                    <th>{{tour.duration.short}}</th>
                    <th>{{tour.duration.long}}</th>
                    <th>{{tour.key}}</th>
                    <th><button>More info</button></th>
                </tr>
            </table>
        </div>
    </div>
</template>


<script>
    export default{
        data: () =>({
                tours: []

        }),
        mounted () {
            var axios = require('axios');
            axios
                .get('http://localhost:1337/tours/all')
                .then(response => this.tours =(response.data))
                .catch(error => alert(error))
                .finally(() => this.loading = false)
        }
    }
</script>

<style scoped>
	
</style>