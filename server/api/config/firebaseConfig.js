import 'dotenv/config' // ES module way of loading environment variables
import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { getAuth } from 'firebase-admin/auth'
import { getStorage } from 'firebase-admin/storage'

import { initializeApp as initApp } from 'firebase/app'
import serviceAccount from './serviceAccountKey.json'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
}

initializeApp({
  credential: cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET,
})

const firebase = initApp(firebaseConfig)

const db = getFirestore()
const auth = getAuth()
const bucket = getStorage().bucket()

export { db, auth, bucket, firebase }
