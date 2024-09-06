import 'dotenv/config' // ES module way of loading environment variables
import admin from 'firebase-admin'
import { initializeApp } from 'firebase/app'
import serviceAccount from './serviceAccountKey.js'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.DATABASE_URL,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET,
})

const firebase = initializeApp(firebaseConfig)

const db = admin.firestore()

const bucket = admin.storage().bucket()

export { admin, db, firebase, bucket }
