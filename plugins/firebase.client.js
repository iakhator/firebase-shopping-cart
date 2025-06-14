import { initializeApp } from 'firebase/app'
import {
  getAuth,
  setPersistence,
  inMemoryPersistence,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(() => {
  console.log('🔥 Firebase Client Initialized')
  const config = useRuntimeConfig()

  console.log(config.public, 'public keyyyeyeyeyeyeyey')

  const firebaseConfig = {
    apiKey: config.public.FIREBASE_API_KEY,
    authDomain: config.public.AUTH_DOMAIN,
    projectId: config.public.PROJECT_ID,
    storageBucket: config.public.STORAGE_BUCKET,
    messagingSenderId: config.public.MESSAGING_SENDER_ID,
    appId: config.public.APP_ID,
    measurementId: config.public.MEASUREMENT_ID,
  }

  const firebaseApp = initializeApp(firebaseConfig)
  const auth = getAuth(firebaseApp)
  const firestore = getFirestore(firebaseApp)

  setPersistence(auth, inMemoryPersistence)
    .then(() => {
      console.log('🔐 Auth persistence set')
    })
    .catch((error) => {
      console.error('❌ Failed to set auth persistence:', error)
    })

  return {
    provide: {
      auth,
      firestore,
      signInWithEmailAndPassword,
      createUserWithEmailAndPassword,
    },
  }
})
