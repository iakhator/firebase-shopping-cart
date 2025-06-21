import { adminAuth } from '~/server/utils/firebaseAdmin'
import { sendEmail } from '~/server/utils/sendEmail'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  let idToken = getCookie(event, 'auth_token')
  const refreshToken = getCookie(event, 'refresh_token')

  // if (!idToken && refreshToken) {
  //   try {
  //     const response = await $fetch(
  //       'https://securetoken.googleapis.com/v1/token?key=' +
  //         config.public.FIREBASE_API_KEY,
  //       {
  //         method: 'POST',
  //         body: new URLSearchParams({
  //           grant_type: 'refresh_token',
  //           refresh_token: refreshToken,
  //         }),
  //       },
  //     )

  //     idToken = response.id_token

  //     setCookie(event, 'idToken', idToken, {
  //       httpOnly: true,
  //       secure: process.env.NODE_ENV === 'production',
  //       maxAge: 3600,
  //       path: '/',
  //     })
  //   } catch (err) {
  //     return
  //   }
  // }

  if (!idToken) return
  // throw createError({ statusCode: 401, message: 'Not authenticated' })
  try {
    event.context.user = await adminAuth.verifyIdToken(idToken)
    await sendEmail({
      to: 'test@example.com',
      subject: 'Order confirmed',
      html: `<p>Thanks for your order!</p>`,
    })
  } catch {
    throw createError({ statusCode: 401, message: 'Invalid token' })
  }
})
