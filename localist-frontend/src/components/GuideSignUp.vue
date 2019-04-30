<!-- <template>
	<div>
        <form v-on:submit.prevent="signUp">
    		<input type="text" v-model="first name" />
    		<input type="text" v-model="last name" />
            <input type="text" v-model="gender" />
            <input type="text" v-model="city" />
            <input type="text" v-model="country" />
            
            <button type="submit">Sign Up</button>
        </form>
	</div>
</template>

<script>
	import router from '../router'

    export default {
        name: 'Signin',
        data: () => ({
            firstName:'',
            LastName:'',
            age: '',
            gender: '',
            city: '',
            country: ''
        }),
        methods: {
            signUp() {
                var axios = require('axios');
                const formData = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.age,
                    email: this.gender,
                    email: this.city,
                    email: this.country,
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
	
</style> -->