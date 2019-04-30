<template>
    <div id = "tourList">
        <h1>Tours</h1>
        <div>
            <div>
                {{info.data.description}}
                {{info.data.price.low}}
                {{info.data.price.high}}
                {{info.data.duration.short}}
                {{info.data.duration_long}}
            </div>
        </div>
    </div>
</template>


<script>
    export default{
        data: () =>({
            info: ''
        }),
        mounted () {
            var axios = require('axios');
            axios
                .get('http://localhost:1337/tours/' + this.$route.params.id)
                .then(response => this.info = response)
                .catch(error => alert(error))
                .finally(() => this.loading = false)
        }
    }
</script>

<style scoped>

</style>