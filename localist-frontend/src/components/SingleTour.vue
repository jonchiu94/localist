<template>
    <div id = "tourList">
        <h1>Tours</h1>
        <div>
            <div
                    v-for = "tour in info"
                    :key="tour.id"
                    class = "tour">
                {{tour.title}}
                {{tour.description}}
                {{tour.price_low}}
                {{tour.price_high}}
                {{tour.duration_short}}
                {{tour.duration_long}}
            </div>
        </div>
    </div>
</template>


<script>
    export default{
        data: () =>({
            info: []
        }),
        mounted () {
            var axios = require('axios');
            axios
                //add this
                .get('http://localhost:1337/tours/tour.id')
                .then(response => this.info =(response.data))
                .catch(error => alert(error))
                .finally(() => this.loading = false)
        }
    }
</script>

<style scoped>

</style>