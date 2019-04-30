module.exports = {


    friendlyName: 'update-guide',


    description: 'Update a guide',


    extendedDescription: `This updates a guide based on the id and the input fields`,


    
    inputs: {
        first_name: {
            required: true,
            type: 'string',
            description: 'Title of tour',
            extendedDescription: 'Must be a valid email address.',
        },

        last_name: {
            required: true,
            type: 'string',
            maxLength: 200,
            example: 'passwordlol',
            description: 'The unencrypted password to use for the new account.'
        },

        gender: {
            required: true,
            type: 'string',
            description: 'The minimum duration in min.'
        },

        age: {
            required: true,
            type: 'number',
            description: 'The maximum duration in min.'
        },

        city: {
            required: true,
            type: 'string'
        },

        country: {
            required: true,
            type: 'string'
        }
    },


    exits: {

        success: {
            description: 'Updated guide successfully.'
        },

        invalid: {
            responseType: 'badRequest',
            description: 'The provided fullName, password and/or email address are invalid.',
            extendedDescription: 'If this request was sent from a graphical user interface, the request ' +
                'parameters should have been validated/coerced _before_ they were sent.'
        },
    },


    fn: async function (inputs) 
    {
        // Initialize Firebase
        var firebase = require('../../database/firebase.js');
        var database = firebase.database();
        var guidesRef = database.ref('guides');
        var key = this.req.params.id;

        var guide = guidesRef.child(key).update({
            info: {
                first_name: inputs.first_name,
                last_name: inputs.last_name,
                gender: inputs.gender,
                age: inputs.age,
                city: inputs.city,
                country: inputs.country
            }
        });

        this.res.json(guide);
    }
};
