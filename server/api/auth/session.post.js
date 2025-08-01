import { adminAuth } from '~/server/utils/firebaseAdmin'
import redis from '~/server/utils/redisClient'

export default defineEventHandler(async (event) => {
  const { idToken, refreshToken } = await readBody(event)

  if (!idToken) return { authenticated: false }

  try {
    const decodedToken = await adminAuth.verifyIdToken(idToken, true)
    const userId = decodedToken.uid

    const userRecord = await adminAuth.getUser(userId)

    // Check if email is verified
    if (!userRecord.emailVerified) {
      throw createError({
        statusCode: 403,
        statusMessage:
          'Please verify your email address before signing in. Check your inbox for the verification link.',
      })
    }

    // Set cookies for session management
    setCookie(event, 'auth_token', idToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 3600,
      path: '/',
    })

    setCookie(event, 'user_id', userId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 60 * 60 * 24, // 1 days
      path: '/',
    })

    redis.set(`refreshToken:${userId}`, refreshToken, 'EX', 60 * 60 * 24 * 7)

    // const actionSettings = {
    //   url: 'http://localhost:3000/verification-success',
    // }
    // const verificationLink = await adminAuth.generateEmailVerificationLink(
    //   decodedToken.email,
    //   actionSettings,
    // )
    // await sendEmailVerificationLink({
    //   email: decodedToken.email,
    //   verificationLink,
    // })

    // Sync cart on login/register
    await syncCartOnLogin(event, userId, redis)

    return { authenticated: true, user: decodedToken }
  } catch (error) {
    deleteCookie(event, 'auth_token')

    if (error.code === 'auth/id-token-expired') {
      setResponseStatus(event, 403)
      return { error: 'Token has expired.', authenticated: false }
    }

    if (error.code === 'auth/invalid-refresh-token') {
      setResponseStatus(event, 403) // Forbidden
      return { error: 'Invalid refresh token.', authenticated: false }
    }
    setResponseStatus(event, 500)
    return { error: 'Failed to refresh token.', authenticated: false }
  }
})
