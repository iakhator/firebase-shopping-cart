import { auth } from '../config/firebaseConfig.js'

export default defineEventHandler(async (event) => {
  const authorizationHeader = event.node.req.headers['authorization']

  // Check if the Authorization header exists and starts with "Bearer "
  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
    return sendError(
      event,
      createError({
        statusCode: 403,
        statusMessage: 'Unauthorized',
      })
    )
  }

  const idToken = authorizationHeader.split('Bearer ')[1]

  try {
    // Verify the Firebase ID token
    const decodedToken = await auth.verifyIdToken(idToken)
    // Attach user ID to the request object for future use
    event.context.uid = decodedToken.uid
  } catch (err) {
    // Handle different error cases from Firebase
    if (err.code === 'auth/id-token-expired') {
      return sendError(
        event,
        createError({
          statusCode: 403,
          statusMessage: 'Token has expired.',
        })
      )
    }

    return sendError(
      event,
      createError({
        statusCode: 403,
        statusMessage: err.code || 'Authentication failed',
      })
    )
  }
})
