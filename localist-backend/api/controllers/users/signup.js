module.exports = {
	friendlyName        : 'Signup',

	description         : 'Sign up for a new user account.',

	extendedDescription : `This creates a new user record in the database, signs in the requesting user agent
by modifying its [session](https://sailsjs.com/documentation/concepts/sessions), and
(if emailing with Mailgun is enabled) sends an account verification email.

If a verification email is sent, the new user's account is put in an "unconfirmed" state
until they confirm they are using a legitimate email address (by clicking the link in
the account verification message.)`,

	inputs              : {
		email         : {
			required            : true,
			type                : 'string',
			isEmail             : true,
			description         :
				'The email address for the new account, e.g. m@example.com.',
			extendedDescription : 'Must be a valid email address.'
		},

		password      : {
			required    : true,
			type        : 'string',
			maxLength   : 200,
			example     : 'passwordlol',
			description :
				'The unencrypted password to use for the new account.'
		},

		name          : {
			required    : true,
			type        : 'json',
			example     : '{"first": "Jacob", "last": "Smith"}',
			description : 'Your name.'
		},

		username      : {
			required    : true,
			type        : 'string',
			example     : 'Jacob13Smith',
			description : 'A username.'
		},

		image         : {
			required    : false,
			type        : 'string',
			description : 'Users profile image'
		},

		date_of_birth : {
			required    : true,
			type        : 'number',
			description :
				'stored in yyyy/mm/dd for example March 15, 1998 becomes 19980315'
		},

		gender        : {
			required    : true,
			type        : 'string',
			description :
				'The gender of the user, can be one of several thousand'
		},

		location      : {
			required    : true,
			type        : 'json',
			description :
				'the city and the country of the users location'
		},

		coordinates   : {
			required    : true,
			type        : 'json',
			description :
				'the lattitude and the longitude of the users location'
		}
	},

	exits               : {
		success           : {
			description : 'New user account was created successfully.'
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
		// var admin = require('../../database/admin.js')
		var r = this.res
		var image = inputs.image || ''

		await firebase
			.auth()
			.createUserWithEmailAndPassword(
				inputs.email,
				inputs.password
			)
			.then((authData) => {
				// 	userData.user = authData
				// 	return firebase.auth().currentUser.getIdToken(false)
				// })
				// .then(function (idToken){
				// 	userData.token = idToken
				// 	return firebase.auth().currentUser.uid
				// })
				// .then(function (uid){
				// userData.uid = uid
				var newUser = database.ref('users').push({
					name          : {
						first : inputs.name.first,
						last  : inputs.name.last
					},
					username      : inputs.username,
					image         : image,
					date_of_birth : inputs.date_of_birth,
					gender        : inputs.gender,
					location      : {
						city    : inputs.location.city,
						country : inputs.location.country
					},
					coordinates   : {
						lattitude :
							inputs.coordinates.lattitude,
						longitude :
							inputs.coordinates.longitude
					}
				})
				// if (inputs.administration) {
				// 	return admin
				// 		.auth()
				// 		.setCustomUserClaims(uid, {
				// 			admin : true
				// 		})
				// }
			})
			.catch(function (error){
				r.json({ error: error })
				return
			})

		this.res.status(201).send('User created successfully')
	}
}
