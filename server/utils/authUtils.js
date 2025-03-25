import { nanoid } from 'nanoid'
import { adminAuth } from '~/server/utils/firebaseAdmin'

export async function getUserOrGuestId(event) {
  let userId
  const authToken = getCookie(event, 'auth_token')

  // Check for authenticated user
  if (authToken) {
    try {
      const payload = await adminAuth.verifyIdToken(authToken, true)
      userId = payload?.uid
    } catch (error) {
      console.warn('Invalid token:', error.message)
    }
  }

  // Handle guest user if no userId
  let guestId
  if (!userId) {
    guestId = getCookie(event, 'guest_id')

    if (!guestId) {
      guestId = nanoid()
      setCookie(event, 'guest_id', guestId, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7, // Expires in 7 days
      })
    }
  }

  return userId || guestId
}
