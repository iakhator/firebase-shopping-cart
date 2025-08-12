import { adminAuth, adminFirestore } from '~/server/utils/firebaseAdmin'

export default defineEventHandler(async (event) => {
  const user = event.context.user

  if (!user) return { authenticated: false, user: null }

  try {
    const userDoc = await adminFirestore.collection('users').doc(user.uid).get()

    // Check if the document exists before accessing data
    if (!userDoc.exists) {
      console.error(`User document not found for uid: ${user.uid}`)
      return {
        authenticated: false,
        userProfileComplete: false,
      }
    }

    const userData = userDoc.data()

    userData.userProfileComplete = true
    userData.uid = user.uid
    userData.role = user.role

    return { authenticated: true, user: userData }
  } catch (error) {
    console.error('Authentication error:', error)

    if (error.code === 'auth/id-token-expired') {
      setResponseStatus(event, 403)
      return { error: 'Token has expired.', authenticated: false }
    }

    setResponseStatus(event, 500)
    return {
      authenticated: false,
      error: error.message || 'Authentication failed',
    }
  }
})
