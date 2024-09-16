import { sendError } from 'h3'
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
    if (error.code === 'auth/email-already-exists') {
      return sendError(
        event,
        createError({
          statusCode: 400,
          statusMessage: 'Email is already in use',
        })
      )
    }

    // Handle other potential errors
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: 'An error occurred while creating the account.',
      })
    )
  }
})
