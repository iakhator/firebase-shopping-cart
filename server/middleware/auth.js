import { adminAuth } from '~/server/utils/firebaseAdmin'
import { getCookie, setCookie } from 'h3'

export default defineEventHandler(async (event) => {
  const url = event.node.req.url

  // 1. Bypass Stripe webhook route
  if (url.startsWith('/api/webhooks/stripe')) {
    return
  }

  const config = useRuntimeConfig()
  let idToken = getCookie(event, 'auth_token')
  const refreshToken = getCookie(event, 'refresh_token')

  if (!idToken && refreshToken) {
    try {
      const response = await $fetch(
        `https://securetoken.googleapis.com/v1/token?key=${config.public.FIREBASE_API_KEY}`,
        {
          method: 'POST',
          body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
          }),
        },
      )

      idToken = response.id_token

      setCookie(event, 'auth_token', idToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 3600,
        path: '/',
      })
    } catch (err) {
      throw createError({ statusCode: 401, message: 'Invalid refresh token' })
    }
  }

  if (!idToken) return

  if (idToken) {
    try {
      const decodedToken = await adminAuth.verifyIdToken(idToken)
      event.context.user = decodedToken
    } catch {
      throw createError({ statusCode: 401, message: 'Invalid token' })
    }
  } else {
    throw createError({ statusCode: 401, message: 'Not authenticated' })
  }
})
