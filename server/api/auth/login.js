import { sendError } from 'h3'
import {
  fireAuth,
  signInWithEmailAndPassword,
} from '../config/firebaseConfig.js'

export default defineEventHandler(async (event) => {
  try {
    const { email, password } = await readBody(event)

    // Sign in the user using Firebase Authentication
    const userRecord = await signInWithEmailAndPassword(
      fireAuth,
      email,
      password
    )
    const token = await userRecord.user.getIdToken()

    // Return the token as a response
    return {
      token,
    }
  } catch (error) {
    console.log(error, 'error')
    if (error.code === 'auth/user-not-found') {
      return sendError(
        event,
        createError({ statusCode: 400, statusMessage: 'User not found' })
      )
    }

    if (error.code === 'auth/invalid-credential') {
      return sendError(
        event,
        createError({
          statusCode: 400,
          statusMessage: 'Invalid email or password',
        })
      )
    }

    // Handle other errors
    return sendError(
      event,
      createError({ statusCode: 500, statusMessage: 'An error occurred' })
    )
  }
})
