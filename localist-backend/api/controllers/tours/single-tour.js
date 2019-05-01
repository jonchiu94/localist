module.exports = {
	friendlyName        : 'single-tours',

	description         : 'Return the tour based on the id',

	extendedDescription : ``,

	inputs              : {},

	exits               : {
		success : {
			description : 'Tour returned successfully.'
		},

		invalid : {
			responseType        : 'badRequest',
			description         :
				'The provided fullName, password and/or email address are invalid.',
			extendedDescription :
				'If this request was sent from a graphical user interface, the request ' +
				'parameters should have been validated/coerced _before_ they were sent.'
		}
	},

	fn                  : async function (inputs){
		// Initialize Firebase
		var firebase = require('../../database/firebase.js')
		var database = firebase.database()
		var toursRef = database.ref('tours/' + this.req.params.id)

		var curr = this

		return toursRef.once('value').then(function (snapshot){
			curr.res.json(snapshot)
		})
	}
}
