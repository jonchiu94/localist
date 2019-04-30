<template>
	<div id = "guideList">
		<h1>Guides</h1>
		<div>
			<table class="table table-dark">
				<tr>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Gender</th>
					<th>City</th>
					<th>Country</th>
				</tr>
				<tr
					v-for = "guide in guides"
					:key="guide.id"
					class = "guide">
					<th>{{guide.info.first_name}}</th>
					<th v-html = "guide.info.last_name"></th>
					<th>{{guide.info.gender}}</th>
					<th>{{guide.info.city}}</th>
					<th>{{guide.info.country}}</th>
					<th><router-link :to="'/guides/single/' + guide.key">{{ guide.key }}</router-link></th>
				</tr>
			</table>
		</div>
		<!-- <div>
			<div v-for = "guide in guides"
					:key="guide.id"
					class = "card" style="width: 18rem;">
			<img class="card-img-top" src="..." alt="Card image cap">
			<div class="card-body">
				<h5 class="card-title">{{guide.info.first_name}}</h5>
				<p class="card-text">{{guide.info.gender}}</p>
				<a href="#" class="btn btn-primary">Go somewhere</a>
			</div>
			</div>
		</div> -->
		<router-link to="guides/createguide">Create Guide</router-link>
	</div>
</template>


<script>

	export default{
		data: () =>({
			guides: []
		}),
		mounted () {
			var axios = require('axios');
			axios
					.get('http://localhost:1337/guides/all')
					.then(response => this.guides =(response.data))
					.catch(error => alert(error))
					.finally(() => this.loading = false)
		}
	}
</script>

<style scoped>


</style>
