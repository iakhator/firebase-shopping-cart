// /**
//  * Script to set a custom claim (e.g., admin role) for a Firebase user.
//  * Usage:
//  *   node setCustomClaim.js <user_email> <role>
//  * Example:
//  *   node setCustomClaim.js admin@example.com admin
//  */

// const admin = require('firebase-admin');
// const path = require('path');

// // Initialize Firebase Admin SDK
// // Make sure GOOGLE_APPLICATION_CREDENTIALS env variable is set
// // or replace with your service account path below
// if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
//   // fallback to local service account file
//   const serviceAccountPath = path.resolve(__dirname, '../serviceAccountKey.json');
//   admin.initializeApp({
//     credential: admin.credential.cert(require(serviceAccountPath)),
//   });
// } else {
//   admin.initializeApp();
// }

// // Get command line arguments
// const [, , userEmail, role] = process.argv;

// if (!userEmail || !role) {
//   console.error('Usage: node setCustomClaim.js <user_email> <role>');
//   process.exit(1);
// }

// async function setCustomClaim(email, roleValue) {
//   try {
//     // Get user by email
//     const userRecord = await admin.auth().getUserByEmail(email);
//     const uid = userRecord.uid;

//     // Set custom claim
//     await admin.auth().setCustomUserClaims(uid, { role: roleValue });
//     console.log(`Custom claim set: { role: '${roleValue}' } for user: ${email} (UID: ${uid})`);

//     // Optionally, force refresh tokens (so claim is available immediately)
//     await admin.auth().revokeRefreshTokens(uid);
//     console.log('Refresh tokens revoked. User will get new claims on next sign-in.');

//     process.exit(0);
//   } catch (error) {
//     console.error('Error setting custom claim:', error.message);
//     process.exit(1);
//   }
// }

// setCustomClaim(userEmail, role);
