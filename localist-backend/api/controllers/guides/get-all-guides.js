module.exports = {


    friendlyName: 'get-all-guides',


    description: 'Return all guides in the database',


    extendedDescription: `This returns all the guides that are in the database`,


    inputs: {
    },


    exits: {

        success: {
            description: 'Guides returned successfully.'
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
        var toursRef = database.ref('guides');

        var data = '';

        // return toursRef.once('value'), function(snapshot) {
        //     console.log("1");
        //     snapshot.forEach(function(childSnapshot) {
        //         console.log(childSnapshot);
        //     });
        // });

        return toursRef.once('value')
            .then(function(snapshot) {
                console.log(snapshot);
            });
        
    }
};
