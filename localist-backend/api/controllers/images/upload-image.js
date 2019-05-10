module.exports = {
	friendlyName        : 'post-tour',

	description         : 'Post a tour',

	extendedDescription : `This creates a new tour and pushes it to the tours database`,

	inputs              : {},

	exits               : {
		success           : {
			description : 'Tour added successfully.'
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
		console.log(this.req.file('img[0]'))
		var imgUrls = []

		var st = await this.req.file('img[0]').upload({
			// ...any other options here...
			adapter     : require('skipper-gclouds'),
			projectId   : '999412385085',
			keyFilename : './storage.json',
			bucket      : 'test-bucket-4827409472',
			//Are files uploaded public?
			public      : true
		}, function (error, uplodadedFiles){
			uplodadedFiles.forEach(function (file){
				imgUrls.push(
					`https://storage.googleapis.com/test-bucket-4827409472/${file.fd}`
				)
			})
		})
		this.res.status(200).json({
			imgUrls
		})
	}
}
