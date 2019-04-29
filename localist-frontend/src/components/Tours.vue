<template>
	<div>
		<!-- Title -->
		<h1>Tours Page</h1>	
	</div>
</template>


<script >
	import router from '../router'

	const API_URL = 'http://localhost:1337/tours/all';

	export default {
		name: 'Tours',
		data: () => ({
            
        }),
        methods: {

        },
	    mounted() {
	        const axios = require('axios')

	        axios
	        	.get(API_URL)
	          	.then(response => (this.tours = response.data.tours))
	          	.catch(error => console.log(error))
	          	.finally(() => this.loading = false)
	    }
	}
</script>

<style scoped>
	
</style>