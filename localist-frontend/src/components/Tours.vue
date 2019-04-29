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
                .get('http://localhost:1337/tours/all')
                .then(response => this.info =(response.data))
                .catch(error => alert(error))
                .finally(() => this.loading = false)
        }
    }
</script>

<style scoped>
	
</style>