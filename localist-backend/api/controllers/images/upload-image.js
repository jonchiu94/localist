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

		if (!this.req.file('image')) {
			console.log('No file uploaded')
			return
		}

		const bucket = storage.bucket(CLOUD_BUCKET)
		const gcsFileName = `${uuid()}.jpg`
		const file = bucket.file(gcsFileName)

		const stream = file.createWriteStream({
			metadata : {
				contentType : this.req.file.mimetype
			}
		})

		stream.on('error', (err) => {
			this.req.file.cloudStorageError = err
			console.log(err)
		})

		stream.on('finish', () => {
			this.req.file.cloudStorageObject = gcsFileName

			return file.makePublic().then(() => {})
		})

		stream.end(this.req.file.buffer)
		this.res.status(200).json({
			data : {
				url : `https://storage.googleapis.com/${bucket.name}/${file.name}`
			}
		})
		// const type = mime.lookup(this.req.file.originalname)
		// console.log(type)

		// const blob = bucket.file(`${uuid()}.jpg`)

		// const stream = await blob.createWriteStream({
		// 	resumable     : true,
		// 	contentType   : type,
		// 	predefinedAcl : 'publicRead'
		// })

		// stream.on('error', (err) => {
		// 	console.log(err)
		// })

		// stream.on('finish', () => {})

		// this.res.status(200).json({
		// 	data : {
		// 		url : `https://storage.googleapis.com/${bucket.name}/${blob.name}`
		// 	}
		// })

		// stream.end(this.req.file.buffer)
	}
}
