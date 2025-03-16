import { adminAuth } from '~/server/utils/firebaseAdmin'

export default defineEventHandler(async (event) => {
  const idToken = getCookie(event, 'auth_token')
  if (!idToken) {
    throw createError({ statusCode: 401, statusMessage: 'No token found' })
  }

  let decodedToken
  try {
    decodedToken = await getAuth().verifyIdToken(idToken)
  } catch (err) {
    throw createError({ statusCode: 401, statusMessage: 'Invalid token' })
  }

  const uid = decodedToken.uid

  // Fetch Firebase User info
  const user = await adminAuth.getUser(uid)

  const body = await readBody(event)
  const { createdDate, ...metadata } = body

  const db = getFirestore()
  const userRef = db.collection('users').doc(uid)

  const doc = await userRef.get()

  if (doc.exists) {
    // Update user data
    await userRef.update({
      ...metadata,
      lastUpdated: new Date(),
    })
  } else {
    // Create new user document
    await userRef.set({
      uid: user.uid,
      email: user.email ?? '',
      createdDate: createdDate ? new Date(createdDate) : new Date(),
      ...metadata,
    })
  }

  return { success: true }
})
