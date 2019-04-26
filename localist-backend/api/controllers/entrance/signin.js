module.exports = {


    friendlyName: 'Signin',


    description: 'Sign in to account.',


    extendedDescription: `This creates a new user record in the database, signs in the requesting user agent
by modifying its [session](https://sailsjs.com/documentation/concepts/sessions), and
(if emailing with Mailgun is enabled) sends an account verification email.

If a verification email is sent, the new user's account is put in an "unconfirmed" state
until they confirm they are using a legitimate email address (by clicking the link in
the account verification message.)`,


    inputs: {
        email: {
            required: true,
            type: 'string',
            isEmail: true,
            description: 'The email address for the new account, e.g. m@example.com.',
            extendedDescription: 'Must be a valid email address.',
        },

        password: {
            required: true,
            type: 'string',
            maxLength: 200,
            example: 'passwordlol',
            description: 'The unencrypted password to use for the new account.'
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


    fn: async function (inputs) {
        // Initialize Firebase
        var firebase = require('../../database/firebase.js');
        var database = firebase.database();
        var admin = require('../../database/admin.js')
        var uid = '';

        console.log("signing in...")
        await firebase.auth().signInWithEmailAndPassword(inputs.email, inputs.password)
        .then(function(firebaseUser) {
            admin.auth().verifyIdToken(idToken).then((claims) => {
                if (claims.admin === true) {
                  return "admin";
                } else
                {
                    return "non-admin";
                }
              });
            // uid = firebase.auth().currentUser.uid;
            // console.log(firebaseUser);
            // return firebaseUser;
        })
        .catch(function(error) {
              // Error Handling
        });
    }
};
