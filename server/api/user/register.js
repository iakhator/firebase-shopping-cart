import { db, auth, firebase } from '../config/firebaseConfig.js'

export default defineEventHandler(async (event) => {
  try {
    // Read request body
    const { email, password, fullname } = await readBody(event)

    const data = {
      email,
      password,
      displayName: fullname,
      photoURL: 'http://www.example.com/12345678/photo.png',
    }

    // Create the user with Firebase Admin SDK
    const userRecord = await auth.createUser(data)

    // Add user details to Firestore
    await db.collection('users').doc(userRecord.uid).set({
      email,
      displayName: fullname,
    })

    // Return success response
    setResponseStatus(event, 200)
    return {
      message: 'Account successfully created.',
    }
  } catch (error) {
    console.log(error, 'error')
    if (error.code === 'auth/email-already-exists') {
      setResponseStatus(event, 400)
      return {
        error: 'Email is already in use.',
      }
    }

    // Handle other potential errors
    setResponseStatus(event, 500)
    return {
      error: 'An error occurred while creating the account.',
    }
  }
})
