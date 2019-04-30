<template>
	<div id = "guideList">
		<h1>Guides</h1>
		<table>
			<tr
					v-for = "guide in info"
					:key="guide.id"
					class = "guide">
				<th>{{guide.info.first_name}}</th>
				<th>{{guide.info.last_name}}</th>
				<th>{{guide.info.gender}}</th>
				<th>{{guide.info.city}}</th>
				<th>{{guide.info.country}}</th>
                <th><router-link :to="'/tours/' + tour.key">{{ tour.key }}</router-link></th>
			</tr>
		</table>
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
					.get('http://localhost:1337/guides/all')
					.then(response => this.info =(response.data))
					.catch(error => alert(error))
					.finally(() => this.loading = false)
		}
	}
</script>

<style scoped>

</style>