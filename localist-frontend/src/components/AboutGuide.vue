<template>
	<div>
		<section>
			<v-layout column>
				<v-flex>
					<v-img
						:src="require('@/assets/community.jpeg')" 
						gradient="rgba(0, 0, 0, .22), rgba(0, 0, 0, .22)"
						height="400"
						max-height="50vh"
					>
						<v-layout column justify-center align-center fill-height>
							<v-felx xs5
								class="display-2 font-weight-bold align-left white--text text-capitalize"
							>
								Become a tour guide
							</v-felx>

							<v-divider></v-divider>

							<v-felx xs5
								class="title align-left white--text linehi-med"
							>
								You know something different that others want to know. 
							</v-felx>
						</v-layout>
						
					</v-img>
				</v-flex>
			</v-layout>
		</section>

		<!-- 
			************************
			** Work on your terms **
			************************
		-->
		<section px-5>
			<v-layout mx-5 justify-center>
				<v-flex 
					mx-5 
					sm10 lg5
				>
					<v-layout 
						wrap justify-center column
					>
						<v-flex 
							mt-5
							xs10
							class="subheading font-weight-thin align-left" 
						>
							Join the community
						</v-flex>
						<v-flex 
							mt-2
							xs10
							class="display-1 font-weight-bold align-left"
						>
							Work on your terms
						</v-flex>

						<v-divider></v-divider>

						<v-flex
							xs10
							class="subheading font-weight-regular align-left linehi-med"
						>
							&nbsp &nbsp &nbsp &nbsp Work on your terms Work on your terms. Work on your terms Work on your terms. 
							Work on your terms Work on your terms. Work on your terms Work on your terms. 
							Work on your terms Work on your terms. Work on your terms Work on your terms. 
							Work on your terms Work on your terms. Work on your terms Work on your terms. 
						</v-flex>
						
					</v-layout>
				</v-flex>

				<v-flex 
					mt-5
					mx-5
					sm10 lg5
				>
					<v-img
						:src="require('@/assets/schedule.jpeg')"
						gradient="rgba(0, 0, 0, .22), rgba(0, 0, 0, .22)"
						height="80%"
					>
					</v-img>
				</v-flex>
			</v-layout>
		</section>

		<!-- 
			*****************************
			** Meet Interesting People **
			*****************************
		-->
		<section px-5>
			<v-layout mx-5 row justify-center>
				<v-flex 
					mt-5
					mx-5
					sm10 lg5
				>
					<v-img
						:src="require('@/assets/people.jpeg')"
						gradient="rgba(0, 0, 0, .22), rgba(0, 0, 0, .22)"
						height="80%"
					>
					</v-img>
				</v-flex>

				<v-flex 
					mx-5 
					sm10 md5
				>
					<v-layout 
						wrap justify-center column
					>
						<v-flex 
							mt-5
							xs10
							class="subheading font-weight-thin align-left" 
						>
							Learn different culture
						</v-flex>
						<v-flex 
							mt-2
							xs10
							class="display-1 font-weight-bold align-left"
						>
							Meet Interesting People
						</v-flex>

						<v-divider></v-divider>

						<v-flex
							xs10
							class="subheading font-weight-regular align-left linehi-med"
						>
							&nbsp &nbsp &nbsp &nbsp Meet Interesting People. Meet Interesting People.
							Meet Interesting People. Meet Interesting People.
							Meet Interesting People. Meet Interesting People.
							Meet Interesting People. Meet Interesting People.
							Meet Interesting People. Meet Interesting People.
							Meet Interesting People. Meet Interesting People.
						</v-flex>
						
					</v-layout>
				</v-flex>
			</v-layout>
		</section>

		<!-- 
			**************************************
			** Make use of your local knowledge **
			**************************************
		-->
		<section px-5>
			<v-layout mx-5 justify-center>
				<v-flex 
					mx-5 
					sm10 lg5
				>
					<v-layout 
						wrap justify-center column
					>
						<v-flex 
							mt-5
							mx-5
							sm10 lg5
						>
							Sell your unique tour idea
						</v-flex>
						<v-flex 
							mt-2
							xs10
							class="display-1 font-weight-bold align-left"
						>
							Make use of your local knowledge
						</v-flex>

						<v-divider></v-divider>

						<v-flex
							xs10
							class="subheading font-weight-regular align-left linehi-med"
						>
							&nbsp &nbsp &nbsp &nbsp Make use of your local knowledge. Make use of your local knowledge. 
							Make use of your local knowledge. Make use of your local knowledge. 
							Make use of your local knowledge. Make use of your local knowledge. 
							Make use of your local knowledge. Make use of your local knowledge. 
							Make use of your local knowledge. Make use of your local knowledge. 
						</v-flex>
						
					</v-layout>
				</v-flex>

				<v-flex 
					mt-5
					mx-5
					sm10 lg5
				>
					<v-img
						:src="require('@/assets/city.jpeg')"
						gradient="rgba(0, 0, 0, .22), rgba(0, 0, 0, .22)"
						height="80%"
					>
					</v-img>
				</v-flex>
			</v-layout>
		</section>


	</div>
</template>

<script>
export default {
	name: "aboutGuide",
}
</script>

<style>
.linehi-med{
	line-height: 1.6;
}
</style>
