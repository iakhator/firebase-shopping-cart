require('dotenv').config()
const admin = require('firebase-admin')
const firebase = require('firebase/app')
const serviceAccount = require('./serviceAccountKey.js')
require('firebase/auth')

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.DATABASE_URL,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: '1031298048826',
  appId: '1:1031298048826:web:a8032c2f3e357314'
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET
})

firebase.initializeApp(firebaseConfig)

const db = admin.firestore()

const bucket = admin.storage().bucket()

module.exports = {
  admin,
  db,
  firebase,
  bucket
}
