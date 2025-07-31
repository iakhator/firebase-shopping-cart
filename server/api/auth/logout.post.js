import { adminAuth } from '~/server/utils/firebaseAdmin'
import redis from '~/server/utils/redisClient'

export default defineEventHandler(async (event) => {
  const authToken = getCookie(event, 'auth_token')
  const user = await event.context.user
  const userId = user.user_id

  if (!authToken || !userId)
    return { success: false, message: 'No active session' }

  try {
    await adminAuth.verifyIdToken(authToken, true)

    await redis.del(`refreshToken:${userId}`)

    deleteCookie(event, 'auth_token', { path: '/' })
    deleteCookie(event, 'user_id', { path: '/' })

    return { success: true }
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to log out' })
  }
})
