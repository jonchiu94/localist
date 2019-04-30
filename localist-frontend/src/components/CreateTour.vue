<template>
    <div>
        <form v-on:submit.prevent="createTour">
        <div>
            <input type="text" placeholder="Title" v-model="title" />
            <input type="text" placeholder="Description" v-model="description" />
            <input type="text" placeholder="Max Duration" v-model="duration_long" />
            <input type="text" placeholder="Min Duration" v-model="duration_short" />
            <input type="text" placeholder="Max Price" v-model="price_high" />
            <input type="text" placeholder="Min Price" v-model="price_low" />
        </div>
        <button type="submit">Create Tour</button>
        </form>
    </div>
</template>
<script>
    import router from '../router'
    export default {
        name: 'createTour',
        data:() => ({
            title: '',
            description: '',
            duration_long: '',
            duration_short: '',
            price_high: '',
            price_low: ''
        }),
        methods:{
            createTour(){
                var axios = require('axios');
                const formData = {
                    title: this.title,
                    description: this.description,
                    duration_long: this.duration_long,
                    duration_short: this.duration_short,
                    price_high: this.price_high,
                    price_low: this.price_low
                };
                axios.post('http://localhost:1337/tours/add', formData)
                    .then(function(response) {
                        router.push('/tours')
                    })
                    .catch(function(error) {
                        alert(error);
                    });

            }
        }
    }
</script>
<style scoped>

</style>