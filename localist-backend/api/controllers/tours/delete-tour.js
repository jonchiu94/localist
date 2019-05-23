module.exports = {
	friendlyName        : 'delete-tours',

	description         : 'Delete the tour based on the id',

	extendedDescription : ``,

	inputs              : {
		token : {
			required    : true,
			type        : 'string',
			description : 'Log in token for firebase authorization.'
		}
	},

	exits               : {
		success        : {
			description : 'Tour deleted successfully.'
		},

		invalid        : {
			responseType        : 'badRequest',
			description         :
				'The provided fullName, password and/or email address are invalid.',
			extendedDescription :
				'If this request was sent from a graphical user interface, the request ' +
				'parameters should have been validated/coerced _before_ they were sent.'
		},

		couldNotVerify : {
			statusCode  : 401,
			description : 'The provided user is not logged in.'
		}
	},

	fn                  : async function (inputs, exits){
		try {
			await sails.helpers.authorize(inputs.token)
		} catch (error) {
			return exits.couldNotVerify(error)
		}
		// Initialize Firebase
		var firebase = require('../../database/firebase.js')
		var database = firebase.database()
		var toursRefShort = database.ref('tours_short')

		var toursRefLong = database.ref('tours_long')

		try {
			await toursRefShort
				.child(this.req.params.key)
				.once('value')
				.then(function (snapshot){
					return snapshot.val().long_id
				})
				.then(function (long_key){
					toursRefLong.child(long_key).remove()
				})
			toursRefShort.child(this.req.params.key).remove()
		} catch (error) {
			return this.res.status(404).send('Tour was not found')
		}

		this.res.status(200).send('Tour deleted')
	}
}
