export const capitalize = (name) => {
  return name
    ?.toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export const shortUUID = () => {
  const randomPart = 'xxxxxx'
    .replace(/x/g, () => Math.floor(Math.random() * 36).toString(36))
    .toUpperCase()

  const now = new Date()
  const timestamp = now.toISOString().slice(0, 10).replace(/-/g, '')

  return `ORD-${timestamp}-${randomPart}`
}

export const countryMap = {
  us: 'United States',
  ca: 'Canada',
  na: 'Nigeria',
  uk: 'United Kingdom',
}

// export async function getUserOrGuestId(event, adminAuth) {
//   let userId
//   const authToken = getCookie(event, 'auth_token')

//   // Check for authenticated user
//   if (authToken) {
//     try {
//       const payload = await adminAuth.verifyIdToken(authToken, true)
//       userId = payload?.uid
//     } catch (error) {
//       console.warn('Invalid token:', error.message)
//     }
//   }

//   // Handle guest user if no userId
//   let guestId
//   if (!userId) {
//     guestId = getCookie(event, 'guest_id')

//     if (!guestId) {
//       guestId = nanoid()
//       setCookie(event, 'guest_id', guestId, {
//         httpOnly: true,
//         maxAge: 60 * 60 * 24 * 7, // Expires in 7 days
//       })
//     }
//   }

//   return userId || guestId
// }
