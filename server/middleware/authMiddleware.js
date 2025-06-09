import { adminAuth } from '~/server/utils/firebaseAdmin'

export default defineEventHandler(async (event) => {
  let idToken = getCookie(event, 'idToken')
  const refreshToken = getCookie(event, 'refreshToken')

  if (!idToken && refreshToken) {
    try {
      const response = await $fetch(
        'https://securetoken.googleapis.com/v1/token?key=' +
          process.env.FIREBASE_API_KEY,
        {
          method: 'POST',
          body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
          }),
        },
      )

      idToken = response.id_token

      setCookie(event, 'idToken', idToken, {
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
