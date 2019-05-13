module.exports = {
	friendlyName : 'update-tour',

	description  : 'Update a tour',

	inputs       : {
		review : {
			required    : true,
			type        : 'json',
			description : ''
		}
	},

	exits        : {
		success : {
			description : 'Tour updated successfully.'
		},

		invalid : {
			responseType : 'badRequest',
			description  :
				'The provided fullName, password and/or email address are invalid.'
		}
	},

	fn           : async function (inputs){
		// Initialize Firebase
		var firebase = require('../../database/firebase.js')
		var database = firebase.database()
		var toursRefShort = database.ref('tours_short')
		var short_key = this.req.params.key

		try {
			await toursRefShort
				.child(short_key)
				.once('value')
				.then(function (snapshot){
					return snapshot.val().long_id
				})
				.then(function (long_key){
					console.log(long_key)
					database
						.ref('tours_long/' + long_key)
						.child('reviews')
						.push({
							user_key :
								inputs.review
									.user_key,
							comment  :
								inputs.review
									.comment,
							rating   :
								inputs.review.rating,
							date     : inputs.review.date
						})
				})
		} catch (error) {
			return this.res
				.status(404)
				.send('Could not find tour, updated aborted')
		}

		this.res.status(200).send('Tour updated succesfully')
	}
}
