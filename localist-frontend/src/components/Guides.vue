<template>
	<div id = "guideList">
		<h1>Guides</h1>
		<hr>
		<router-link to="/">Home</router-link>
		<router-link to="/tours">Tours</router-link>
		<router-link to="/guides">Guides</router-link>
		<hr>
		<router-view></router-view>
		<div>
			<div
					v-for = "guide in info"
					:key="guide.id"
					class = "guide">
				{{guide.info.first_name}}
				{{guide.info.last_name}}
				{{guide.info.gender}}
				{{guide.info.city}}
				{{guide.info.country}}

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
					.get('http://localhost:1337/guides/all')
					.then(response => this.info =(response.data))
					.catch(error => alert(error))
					.finally(() => this.loading = false)
		}
	}
</script>

<style scoped>

</style>