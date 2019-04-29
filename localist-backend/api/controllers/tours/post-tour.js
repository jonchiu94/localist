module.exports = {


    friendlyName: 'post-tour',


    description: 'Post a tour',


    extendedDescription: `This creates a new tour and pushes it to the tours database`,


    inputs: {
        title: {
            required: true,
            type: 'string',
            description: 'Title of tour',
            extendedDescription: 'Must be a valid email address.',
        },

        description: {
            required: true,
            type: 'string',
            maxLength: 200,
            example: 'passwordlol',
            description: 'The unencrypted password to use for the new account.'
        },

        duration_short: {
            required: true,
            type: 'number',
            description: 'The minimum duration in min.'
        },

        duration_long: {
            required: true,
            type: 'number',
            description: 'The maximum duration in min.'
        },

        price_low: {
            required: true,
            type: 'number',
            description: 'The minimum price in dollars.'
        },

        price_high: {
            required: true,
            type: 'number',
            description: 'The maximum price in dollars.'
        }
    },


    exits: {

        success: {
            description: 'Signed in successfully.'
        },

        invalid: {
            responseType: 'badRequest',
            description: 'The provided fullName, password and/or email address are invalid.',
            extendedDescription: 'If this request was sent from a graphical user interface, the request ' +
                'parameters should have been validated/coerced _before_ they were sent.'
        },

        emailAlreadyInUse: {
            statusCode: 409,
            description: 'The provided email address is already in use.',
        },

    },


    fn: async function (inputs) 
    {
        // Initialize Firebase
        var firebase = require('../../database/firebase.js');
        var database = firebase.database();
        var toursRef = database.ref('tours');

        var tour = toursRef.push({
            title: inputs.title,
            description: inputs.description,
            duration: {
                short: inputs.duration_short,
                long: inputs.duration_long
            },
            price: {
                low: inputs.price_low,
                high: inputs.price_high
            }
        });

        this.res.json(tour);
    }
};
