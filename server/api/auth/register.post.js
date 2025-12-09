import { adminAuth, adminFirestore } from '~/server/utils/firebaseAdmin'
import { sendEmailVerificationLink } from '~/server/services/emailService'
import crypto from 'crypto'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const user = await adminAuth.createUser(body)

    if (!user.uid) return

    // Set custom user claims for admin role if requested in registration body
    if (body.role && body.role === 'admin') {
      await adminAuth.setCustomUserClaims(user.uid, { role: 'admin' })
    } else {
      await adminAuth.setCustomUserClaims(user.uid, { role: 'user' })
    }

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

    const verificationCode = crypto.randomUUID()
    // Generate 6-digit PIN
    const pin = Math.floor(100000 + Math.random() * 900000).toString()
    const expiresAt = Date.now() + 20 * 60 * 1000

    await adminFirestore
      .collection('verificationCodes')
      .doc(verificationCode)
      .set({
        userId: user.uid,
        pin,
        expiresAt,
      })

    await sendEmailVerificationLink({
      email: user.email,
      pin,
      firstName: body.firstName,
    })

    setResponseStatus(event, 201)
    return {
      success: true,
      code: verificationCode,
      message:
        'Account created successfully. Please check your email to verify your account before signing in.',
    }
  } catch (error) {
    setResponseStatus(event, 400)
    console.log(error, 'error')
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
