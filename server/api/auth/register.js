import { adminAuth, adminFirestore as db } from '~/server/utils/firebaseAdmin'

export default defineEventHandler(async (event) => {
  const { email, password, firstName, lastName } = await readBody(event)

  try {
    const fullname = `${firstName} ${lastName}`
    const data = {
      email,
      password,
      displayName: fullname,
      photoURL: 'http://www.example.com/12345678/photo.png',
    }

    const userRecord = await adminAuth.createUser(data)
    if (userRecord) {
      db.collection('users')
        .doc(userRecord.uid)
        .set({ email, displayName: fullname, firstName, lastName })
    }
    return { success: true }
  } catch (error) {
    if (error.code === 'auth/email-already-exists') {
      return {
        success: false,
        message: 'Email is already in use.',
      }
    }

    return { success: false, message: error }
  }
})
