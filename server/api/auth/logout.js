import { adminAuth } from '~/server/utils/firebaseAdmin'

export default defineEventHandler(async (event) => {
  const authToken = getCookie(event, 'auth_token')
  if (!authToken) return { success: false, message: 'No active session' }

  try {
    await adminAuth.verifyIdToken(authToken, true)

    deleteCookie(event, 'auth_token', { path: '/' })
    deleteCookie(event, 'refresh_token', { path: '/' })

    return { success: true }
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to log out' })
  }
})
