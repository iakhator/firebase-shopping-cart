import { adminAuth } from '~/server/utils/firebaseAdmin'
import { redis } from '~/server/utils/redisClient'

export default defineEventHandler(async (event) => {
  // const authToken = getCookie(event, 'token')
  const { idToken, refreshToken } = await readBody(event)
  if (!idToken) return { authenticated: false }

  try {
    const decodedToken = await adminAuth.verifyIdToken(idToken, true)

    // Set cookies for session management
    setCookie(event, 'auth_token', idToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 3600,
      path: '/',
    })
    setCookie(event, 'refresh_token', refreshToken, {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
    })

    // Sync cart on login/register
    await syncCartOnLogin(event, decodedToken.uid, redis)

    return { authenticated: true, user: decodedToken }
  } catch (error) {
    deleteCookie(event, 'auth_token')

    if (error.code === 'auth/id-token-expired') {
      setResponseStatus(event, 403)
      return { error: 'Token has expired.', authenticated: false }
    }
    return { authenticated: false }
  }
})
