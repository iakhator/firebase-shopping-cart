import { adminAuth } from '~/server/utils/firebaseAdmin'

export default defineEventHandler(async (event) => {
  const { idToken } = await readBody(event)
  if (!idToken) return { error: 'ID Token is required' }

  try {
    const decodedToken = await adminAuth.verifyIdToken(idToken)
    const sessionCookie = await adminAuth.createSessionCookie(idToken, {
      expiresIn: 60 * 60 * 24 * 5 * 1000,
    }) // 5 Days

    setCookie(event, 'session', sessionCookie, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24 * 5,
    })
    return { success: true, user: decodedToken }
  } catch (error) {
    return { error: 'Invalid token' }
  }
})
