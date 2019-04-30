<template>
    <div id = "tourList">
        <h1>Tours</h1>
        <div>
                {{info.data.title}} <br>
                {{info.data.description}}<br>
                {{info.data.price.high}}
                {{info.data.price.low}}<br>
                {{info.data.duration.long}}
                {{info.data.duration.short}}
        </div>
    </div>
</template>


<script>
    export default {
        data: () => ({
            info: ''
        }),
        mounted() {
            var axios = require('axios');
            axios
                .get(this.$store.state.server_url + '/tours/' + this.$route.params.id)
                .then(response => this.info = response)
                .catch(error => alert(error))
                .finally(() => this.loading = false)
        }
    }

</script>

<style scoped>


</style>
