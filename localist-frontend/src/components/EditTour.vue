<template>
	<div>

		<v-layout wrap pt-3 justify-center>
      <v-flex xs8 class="cyan--text text--darken-2 display-2 font-weight-black font-italic">Edit Tour</v-flex>
    </v-layout>

		<v-divider></v-divider>

		<form v-on:submit.prevent="editTour">
			<v-layout pt-4 row justify-center>
				<v-flex md5>
					<v-text-field 
						label="Title *" 
						:placeholder="info.data.title" 
						v-model="title">
					</v-text-field>
				</v-flex>
			</v-layout>

			<v-layout row justify-center>
				<v-flex mx-2 md5>
					<v-textarea
						auto-grow
						label="Description *"
						v-model="tour_description"
						:placeholder="info.data.tour_description"
					></v-textarea>
				</v-flex>
			</v-layout>

			<v-layout row justify-center>
				<v-flex mx-2 md5>
					<v-text-field 
						label="Additional Comment " 
						v-model="additional_comments" 
						:placeholder="info.data.additional_comments">
					</v-text-field>
				</v-flex>
			</v-layout>

			<v-layout row justify-center>
				<v-flex mx-2 md5>
					<v-text-field 
						label="Category *" 
						v-model="category" 
						:placeholder="info.data.category">
					</v-text-field>
				</v-flex>
			</v-layout>

			<v-layout row justify-center>
				<v-flex mx-2 md3>
					<v-text-field
						label="Country *"
						v-model="location.country"
						:placeholder="info.data.location.country"
					></v-text-field>
				</v-flex>

				<v-flex mx-2 md3>
					<v-text-field
						label="City *"
						v-model="location.city"
						:placeholder="info.data.location.city"
					></v-text-field>
				</v-flex>
			</v-layout>

			<v-layout row justify-center>
				<v-flex mx-2 md3>
					<v-text-field
						label="Min Duration *"
						v-model="duration.short"
						:placeholder="info.data.duration.short"
					></v-text-field>
				</v-flex>

				<v-flex mx-2 md3>
					<v-text-field
						label="Max Duration *"
						v-model="duration.long"
						:placeholder="info.data.duration.long"
					></v-text-field>
				</v-flex>
			</v-layout>

			<v-layout row justify-center>
				<v-flex mx-2 md3>
					<v-text-field
						xs4
						label="Min Price *"
						v-model="price.low"
						:placeholder="info.data.price.low"
					></v-text-field>
				</v-flex>

				<v-flex mx-2 md3>
					<v-text-field
						xs4
						label="Max Price *"
						v-model="price.hign"
						:placeholder=info.data.price.high
						:value=info.data.price.high
					></v-text-field>
				</v-flex>
			</v-layout>

			<v-layout row justify-center>
				<v-flex mx-2 md3>
					<v-text-field
						xs4
						label="Min Guest *"
						v-model="guests.low"
						:placeholder="info.data.guests.low"
					></v-text-field>
				</v-flex>

				<v-flex mx-2 md3>
					<v-text-field
						xs4
						label="Max Guest *"
						v-model="guests.high"
						:placeholder="info.data.guests.high"
					></v-text-field>
				</v-flex>
			</v-layout>

			<v-layout pb-5 row justify-center>
				<v-btn 
					dark
					large
					Submit
					pb-5
					class="cyan darken-2"
					v-on:click="editTour()"
				>
					Submit
				</v-btn>
			</v-layout>
			

		</form>
	</div>
</template> 


<script>
import router from "../router";

export default {
	name: "editTour",

	data: () => ({
		info: "",

		title: "",
		tour_description: "",
		category: "",
		location: {
			country: "",
			city: ""
		},
		duration: {
			long: "",
			short: ""
		},
		price: {
			high: "",
			low: ""
		},
		guests: {
			high: "",
			low: ""
		},
		additional_comments: "",
		availability: [],
		user_key: ""
	}),

	methods: {
		editTour() {
			const formData = {
				title: this.title,
				tour_description: this.tour_description,
				category: this.category,
				location: {
						country: this.location.country,
						city: this.location.city
				},
				duration: {
						long: this.duration.long,
						short: this.duration.short
				},
				price: {
						high: this.price.high,
						low: this.price.low
				},
				guests: {
						high: this.guests.high,
						low: this.guests.low
				},
				additional_comments: this.additional_comments,
				availability: this.availability,
				user_key: this.$store.getters.getUserKey
			};

			this.$http
				.patch("/tour/update/" + this.$route.params.id, formData)
				.then(function(response) {
					router.push("/tours");
				})
				.catch(function(error) {
					alert(error);
				});
		}
	},

	mounted() {
		this.$http
			.get("/tour/find/" + this.$route.params.id + "/true")
			.then(response => (this.info = response))
			.catch(error => alert(error))
			.finally(() => (this.loading = false));
	}
};
</script>
<style scoped>
</style>