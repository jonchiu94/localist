module.exports = {
	friendlyName        : 'Make Admin',

	description         : 'Make a user an admin and give them admin privelages.',

	extendedDescription : ``,

	inputs              : {},

	exits               : {
		success           : {
			description : 'User made Admin successfully.'
		},

		invalid           : {
			responseType        : 'badRequest',
			description         :
				'The provided fullName, password and/or email address are invalid.',
			extendedDescription :
				'If this request was sent from a graphical user interface, the request ' +
				'parameters should have been validated/coerced _before_ they were sent.'
		},

		emailAlreadyInUse : {
			statusCode  : 409,
			description : 'The provided email address is already in use.'
		}
	},

	fn                  : async function (inputs){
		// Initialize Firebase
		var firebase = require('../../database/firebase.js')
		var database = firebase.database()
		var admin = require('../../database/admin.js')
		var usersRef = database.ref('users/' + this.req.params.key)
		var uid = ''

		try {
			await usersRef.once('value').then(function (snapshot){
				uid = snapshot.val().uid
			})
			await admin.auth().setCustomUserClaims(uid, {
				admin : true
			})
		} catch (error) {
			this.res.status(404).send('User could not be found')
		}

		this.res
			.status(204)
			.send(
				'User has been updated to have administrator priviledges'
			)
	}
}
