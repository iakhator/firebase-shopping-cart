import { adminAuth, adminFirestore } from '~/server/utils/firebaseAdmin'

export default defineEventHandler(async (event) => {
  const user = await event.context.user

  const authToken = getCookie(event, 'auth_token')

  if (!user) return { authenticated: false }

  try {
    const decodedToken = await adminAuth.verifyIdToken(authToken, true)
    console.log(decodedToken.uid, 'decodedToken.uid', user.uid, 'user.uid')

    // Fetch user from firestore in 'users' collection
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

    return { authenticated: true, user: userData }
  } catch (error) {
    console.error('Authentication error:', error)

    if (error.code === 'auth/id-token-expired') {
      setResponseStatus(event, 403)
      return { error: 'Token has expired.', authenticated: false }
    }

    // For other errors, you might want to set a specific status code
    setResponseStatus(event, 500)
    return {
      authenticated: false,
      error: error.message || 'Authentication failed',
    }
  }
})
