import { createRequire } from 'module'; // Bring in the ability to create the 'require' method
import admin from 'firebase-admin';

const require = createRequire(import.meta.url); // construct the require method
const serviceAccount = require('./serviceAccountKey.json');

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const auth = app.auth();

const args = process.argv.slice(2);
const uid = args[0];

if (uid == null) {
  console.log('Error: UID is undefined, please set UID as a first parameter. For example, `node ./scripts/markAsAuthor.mjs <UID>`');
  process.exit(1);
}

const customClaims = {
  'https://hasura.io/jwt/claims': {
    'x-hasura-default-role': 'author',
    'x-hasura-allowed-roles': ['author'],
    'x-hasura-user-id': uid,
  },
};

auth.setCustomUserClaims(uid, customClaims);

// Lookup the user associated with the specified uid.
auth.getUser(uid).then((userRecord) => {
  // The claims can be accessed on the user record.
  console.log(userRecord);
});
