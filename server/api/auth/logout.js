import { adminAuth } from '~/server/utils/firebaseAdmin'

export default defineEventHandler(async (event) => {
  const sessionCookie = getCookie(event, 'session')
  if (!sessionCookie) return { success: false, message: 'No active session' }

  try {
    const decoded = await adminAuth.verifySessionCookie(sessionCookie, true)

    await adminAuth.revokeRefreshTokens(decoded.uid)

    deleteCookie(event, 'session')

    return { success: true, message: 'User logged out and token revoked' }
  } catch (error) {
    return {
      success: false,
      message: 'Failed to revoke token',
      error: error.message,
    }
  }
})
