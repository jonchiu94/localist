module.exports = {


    friendlyName: 'Users',
  
  
    description: 'list users.',
  
  
    extendedDescription:
  `This creates a new user record in the database, signs in the requesting user agent
  by modifying its [session](https://sailsjs.com/documentation/concepts/sessions), and
  (if emailing with Mailgun is enabled) sends an account verification email.
  
  If a verification email is sent, the new user's account is put in an "unconfirmed" state
  until they confirm they are using a legitimate email address (by clicking the link in
  the account verification message.)`,
  
  
    inputs: {

    },
  
  
    exits: {
  
      success: {
        description: 'New user account was created successfully.'
      },
  
      invalid: {
        responseType: 'badRequest',
        description: 'The provided fullName, password and/or email address are invalid.',
        extendedDescription: 'If this request was sent from a graphical user interface, the request '+
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
    const functions = require('firebase-functions');
    var serviceAccount = require('./adminn.json');
    const admin = require('firebase-admin');

    if (!admin.apps.length){
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://localist-f915c.firebaseio.com"
          });
    }


        admin.auth().listUsers(100).then((userRecords) => {
        return userRecords;
        }).catch((error) => console.log(error));

    }
  
  };
  