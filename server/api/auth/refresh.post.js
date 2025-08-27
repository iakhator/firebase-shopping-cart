import redis from '~/server/utils/redisClient'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  const userId = getCookie(event, 'user_id')

  if (!userId) {
    return { success: false, message: 'No user id found' }
  }

  const refreshToken = await redis.get(`refreshToken:${userId}`)

  if (!refreshToken) {
    return { success: false, message: 'No refresh token found' }
  }

  try {
    // Exchange refresh token for a new ID token
    const response = await $fetch(
      `https://securetoken.googleapis.com/v1/token?key=${config.public.FIREBASE_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
        }),
      },
    )

    const refreshed = await response

    // Check for errors in the response
    if (!response.user_id) {
      const errorMessage = refreshed.error?.message || 'Unknown error'
      if (errorMessage === 'INVALID_GRANT') {
        return {
          success: false,
          message: 'Refresh token is invalid or expired',
        }
      }
      return {
        success: false,
        message: `Token refresh failed: ${errorMessage}`,
      }
    }

    // Get new tokens
    const newIdToken = refreshed.access_token
    // const newRefreshToken = refreshed.refresh_token // May or may not change

    // Store the new tokens securely
    setCookie(event, 'auth_token', newIdToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 3600,
      path: '/',
    })

    // TODO: update refresh token
    // setCookie(event, 'refreshToken', newRefreshToken, {
    //   httpOnly: true,
    //   secure: true,
    // })

    return { success: true, token: newIdToken }
  } catch (error) {
    deleteCookie(event, 'auth_token')
    redis.delete(`refreshToken:${userId}`)
    return { success: false, message: 'Token refresh failed', error }
  }
})
