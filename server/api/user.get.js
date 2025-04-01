import { adminAuth, adminFirestore } from '~/server/utils/firebaseAdmin'

export default defineEventHandler(async (event) => {
  const authToken = getCookie(event, 'auth_token')

  if (!authToken) return { authenticated: false }

  try {
    const decodedToken = await adminAuth.verifyIdToken(authToken, true)

    // Fetch user from firestore in 'users' collection
    const userDoc = await adminFirestore
      .collection('users')
      .doc(decodedToken.uid)
      .get()

    // Check if the document exists before accessing data
    if (!userDoc.exists) {
      console.error(`User document not found for uid: ${decodedToken.uid}`)
      return {
        authenticated: true,
        user: decodedToken,
        userProfileComplete: false,
      }
    }

    const user = userDoc.data()

    // Use optional chaining to safely access properties
    decodedToken.firstName = user?.firstName || null
    decodedToken.lastName = user?.lastName || null
    decodedToken.address = user?.address || null
    decodedToken.userProfileComplete = true

    return { authenticated: true, user: decodedToken }
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
