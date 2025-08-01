import { adminAuth, adminFirestore } from '~/server/utils/firebaseAdmin'
import { sendEmailVerificationLink } from '~/server/services/emailService'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const user = await adminAuth.createUser(body)

    console.log(user, 'user')

    if (!user.uid) return

    const userRef = adminFirestore.collection('users').doc(user.uid)
    await userRef.set({
      uid: user.uid,
      email: user.email,
      firstName: body.firstName || '',
      lastName: body.lastName || '',
      displayName: body.displayName,
      emailVerified: false,
      createdDate: body.createdDate,
      lastUpdated: new Date().toISOString(),
    })

    const actionSettings = {
      url: `${useRuntimeConfig().public.BASE_URL}/auth/login`,
    }
    const verificationLink = await adminAuth.generateEmailVerificationLink(
      user.email,
      actionSettings
    )
    await sendEmailVerificationLink({
      email: user.email,
      verificationLink,
      firstName: body.firstName,
    })

    setResponseStatus(event, 201)
    return {
      success: true,
      message:
        'Account created successfully. Please check your email to verify your account before signing in.',
    }
  } catch (error) {
    setResponseStatus(event, 400)
    let errorMessage = 'Failed to create user.'

    if (error.code === 'auth/email-already-exists') {
      errorMessage = 'An account with this email already exists.'
    } else if (error.code === 'auth/invalid-email') {
      errorMessage = 'Invalid email address.'
    } else if (error.code === 'auth/weak-password') {
      errorMessage = 'Password is too weak.'
    }

    return {
      success: false,
      message: errorMessage,
    }
  }
})
