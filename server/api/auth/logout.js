import { adminAuth } from '~/server/utils/firebaseAdmin'

export default defineEventHandler(async (event) => {
  const authToken = getCookie(event, 'token')
  if (!authToken) return { success: false, message: 'No active session' }

  try {
    await adminAuth.verifyIdToken(authToken, true)

    deleteCookie(event, 'token', { path: '/' })

    return { success: true }
  } catch (error) {
    console.log(error, 'error')
    throw createError({ statusCode: 500, message: 'Failed to log out' })
  }
})
