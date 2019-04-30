<template>
	<div>
        <form v-on:submit.prevent="createGuide">
            <div>
        		<input type="text" placeholder="First Name" v-model="first_name" />
        		<input type="text" placeholder="Last Name" v-model="last_name" />
                <input type="text" placeholder="Age" v-model="age" />
                <input type="text" placeholder="Gender" v-model="gender" />
                <input type="text" placeholder="City" v-model="city" />
                <input type="text" placeholder="Country" v-model="country" />
            </div>
            <button type="submit">Create Guide</button>
        </form>
	</div>
</template>

<script>
	import router from '../router'

    export default {
        name: 'createGuide',
        data: () => ({
            first_name:'',
            last_name:'',
            age: '',
            gender: '',
            city: '',
            country: ''
        }),
        methods: {
            createGuide() {
                var axios = require('axios');
                const formData = {
                    first_name: this.first_name,
                    last_name: this.last_name,
                    age: this.age,
                    gender: this.gender,
                    city: this.city,
                    country: this.country
                };
                axios.post(this.$store.state.server_url + '/guides/add', formData)
                    .then(function(response) {
                        router.push('/guides')
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