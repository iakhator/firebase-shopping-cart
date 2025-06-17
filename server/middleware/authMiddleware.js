import { adminAuth } from '~/server/utils/firebaseAdmin'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  let idToken = getCookie(event, 'auth_token')
  const refreshToken = getCookie(event, 'refresh_token')

  if (!idToken && refreshToken) {
    try {
      const response = await $fetch(
        'https://securetoken.googleapis.com/v1/token?key=' +
          config.public.FIREBASE_API_KEY,
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
      return
    }
  }

  if (!idToken) return

  try {
    const decoded = await adminAuth.verifyIdToken(idToken)
    event.context.user = decoded
  } catch (err) {
    console.error('Invalid token', err)
  }
})
