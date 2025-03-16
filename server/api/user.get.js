import { adminAuth } from '~/server/utils/firebaseAdmin'

export default defineEventHandler(async (event) => {
  const authToken = getCookie(event, 'auth_token')

  if (!authToken) return { authenticated: false }

  try {
    const decodedToken = await adminAuth.verifyIdToken(authToken, true)

    return { authenticated: true, user: decodedToken }
  } catch (error) {
    if (error.code === 'auth/id-token-expired') {
      setResponseStatus(event, 403)
      return { error: 'Token has expired.', authenticated: false }
    }
    return { authenticated: false }
  }
})
