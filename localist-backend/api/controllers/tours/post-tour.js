module.exports = {
	friendlyName        : 'post-tour',

	description         : 'Post a tour',

	extendedDescription : `This creates a new tour and pushes it to the tours database`,

	inputs              : {
		title               : {
			required    : true,
			type        : 'string',
			description : 'Title of the tour'
		},

		guide_id            : {
			required    : true,
			type        : 'string',
			description :
				'The guide_id for the guide that created the tour.'
		},

		price               : {
			required    : true,
			type        : 'json',
			description :
				'{"low" : "the low price for the price range","high": "the high price for the price range"}'
		},

		duration            : {
			required    : true,
			type        : 'json',
			description :
				'{"short" : "the short duration for the duration range","long": "the long duration for the duration range"}'
		},

		main_image          : {
			required    : false,
			type        : 'string',
			description : 'The main display image of the tour.'
		},

		images              : {
			required    : false,
			type        : 'ref',
			description : 'An array of image urls.'
		},

		location            : {
			required    : true,
			type        : 'json',
			description :
				'{"city" : "the city of tour","country": "the country of tour", "lattitude", "lat of tour", "longitude", "long of tour"}'
		},

		category            : {
			required    : true,
			type        : 'string',
			description : 'The category of the tour'
		},

		tags                : {
			required    : false,
			type        : 'ref',
			description : 'related tags for the tour'
		},

		tour_description    : {
			required    : true,
			type        : 'string',
			description : 'A description of the tour'
		},

		additional_comments : {
			required    : false,
			type        : 'string',
			description :
				'Any additional comments the guide wants to add to be more informative to the tourist'
		}
	},

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
		// Initialize Firebase
		var firebase = require('../../database/firebase.js')
		var database = firebase.database()
		var toursRefLong = database.ref('tours_long')
		var toursRefShort = database.ref('tours_short')

		var image = inputs.main_image || ''
		var images = inputs.images || ''
		var tag = inputs.tags || ''
		var comments = inputs.additional_comments || ''
		var short_tour = await toursRefLong.push({
			coordinates         : {
				lat  : inputs.location.lattitude,
				long : inputs.location.longitude
			},
			description         : inputs.tour_description,
			additional_comments : comments,
			images              : images
		})

		var long_tour = await toursRefShort.push({
			title    : inputs.title,
			guide_id : inputs.guide_id,
			price    : {
				low  : inputs.price.low,
				high : inputs.price.high
			},
			duration : {
				short : inputs.duration.short,
				long  : inputs.duration.long
			},
			image    : image,
			location : {
				city    : inputs.location.city,
				country : inputs.location.country
			},
			tags     : tag,
			category : inputs.category,
			long_id  : short_tour.key
		})

		this.res.status(201).json({ id: long_tour.key })
	}
}
