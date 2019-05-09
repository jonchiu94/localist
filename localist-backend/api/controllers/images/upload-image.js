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
		process.env.GOOGLE_APPLICATION_CREDENTIALS = './storage.json'
		const fs = require('fs')
		const { Storage } = require('@google-cloud/storage')
		const uuid = require('uuid/v4')
		const mime = require('mime-types')
		const storage = new Storage()
		const CLOUD_BUCKET = 'test-bucket-4827409472'
		var t = this
		const bucket = storage.bucket(CLOUD_BUCKET)
		var imgUrls = []

		var st = await this.req.file('img').upload({
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
					`https://storage.googleapis.com/${bucket.name}/${file.fd}`
				)
			})
			console.log(imgUrls)
		})
		console.log(st)

		this.res.status(200).json({
			imgUrls
		})
	}
}
