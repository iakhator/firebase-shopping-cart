import { adminAuth } from '~/server/utils/firebaseAdmin'
import redis from '~/server/utils/redisClient'

export default defineEventHandler(async (event) => {
  const url = event.node.req.url

  // 1. Bypass Stripe webhook route
  if (url.startsWith('/api/webhooks/stripe')) {
    return
  }

  const config = useRuntimeConfig()
  let idToken = getCookie(event, 'auth_token')
  const userId = getCookie(event, 'user_id')

  if (!userId) {
    return
  }

  const refreshToken = await redis.get(`refreshToken:${userId}`)

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
      console.error(err)
      throw createError({ statusCode: 401, message: 'Invalid refresh token' })
    }
  }

  if (!idToken) {
    event.context.user = null
    return
  }

  try {
    const decodedToken = await adminAuth.verifyIdToken(idToken)
    event.context.user = decodedToken
  } catch (err) {
    console.error(err)
    event.context.user = null
    throw createError({ statusCode: 401, message: 'Invalid token' })
  }
})

// export default defineEventHandler(async (event) => {
//   // Get token from cookie
//   const idToken = getCookie(event, 'auth_token')
//   if (!idToken) {
//     event.context.user = null
//     return
//   }

//   try {
//     const decodedToken = await adminAuth.verifyIdToken(idToken)
//     event.context.user = decodedToken
//   } catch (err) {
//     event.context.user = null
//     // Optionally, throw error or just return
//     // throw createError({ statusCode: 401, message: 'Invalid token' })
//     return
//   }
// })
