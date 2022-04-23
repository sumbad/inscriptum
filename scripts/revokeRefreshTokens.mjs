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
  console.log('Error: UID is undefined, please set UID as a first parameter. For example, `node ./scripts/revokeRefreshTokens.mjs <UID>`');
  process.exit(1);
}

// Revoke all refresh tokens for a specified user for whatever reason.
// Retrieve the timestamp of the revocation, in seconds since the epoch.
auth
  .revokeRefreshTokens(uid)
  .then(() => {
    return auth.getUser(uid);
  })
  .then((userRecord) => {
    return new Date(userRecord.tokensValidAfterTime).getTime() / 1000;
  })
  .then((timestamp) => {
    console.log(`Tokens revoked at: ${timestamp}`);
  });
