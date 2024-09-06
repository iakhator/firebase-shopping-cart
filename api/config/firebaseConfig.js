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
  messagingSenderId: '1031298048826',
  appId: '1:1031298048826:web:a8032c2f3e357314',
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
