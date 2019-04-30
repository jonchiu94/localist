<template>
    <div id = "guideList">
        <h1>Guides</h1>
        <div>
            {{info}}
            <div>
                {{info.data.first.name}}
                {{info.data.last.name}}
                {{info.data.gender}}
                {{info.data.city}}
                {{info.data.country}}
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
                .get('http://localhost:1337/guides/' + this.$route.params.id)
                .then(response => this.info =(response.data))
                .catch(error => alert(error))
                .finally(() => this.loading = false)
        }
    }
</script>

<style scoped>

</style>