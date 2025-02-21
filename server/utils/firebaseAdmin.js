import { initializeApp, cert, getApps } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'
import serviceAccountKey from '~/serviceAccountKey'

if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccountKey),
  })
} else {
  getApps()
}

export const adminAuth = getAuth()
export const adminFirestore = getFirestore()
