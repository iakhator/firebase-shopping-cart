import { adminAuth, adminFirestore as db } from '~/server/utils/firebaseAdmin'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { code, enteredPin } = body

    if (!code || !enteredPin || enteredPin.length !== 6) {
      return {
        success: false,
        message: 'Missing code or PIN, or PIN is not 6 digits.',
      }
    }

    // Look up the verification code document
    const codeDocRef = db.collection('verificationCodes').doc(code)
    const codeDocSnap = await codeDocRef.get()

    if (!codeDocSnap.exists) {
      return {
        success: false,
        message: 'Verification code not found or expired.',
      }
    }

    const data = codeDocSnap.data()
    if (data.expiresAt && data.expiresAt < Date.now()) {
      await codeDocRef.delete()
      return {
        success: false,
        message: 'Verification code expired.',
      }
    }

    console.log(data.pin, typeof data.pin, enteredPin, typeof enteredPin)

    if (data.pin !== enteredPin.toString()) {
      return {
        success: false,
        message: 'Incorrect PIN.',
      }
    }

    // Mark user as verified in Firestore
    await db.collection('users').doc(data.userId).update({
      emailVerified: true,
    })

    await adminAuth.updateUser(data.userId, { emailVerified: true })

    const customToken = await adminAuth.createCustomToken(data.userId)

    // Delete verification code document after successful verification
    await codeDocRef.delete()

    return {
      success: true,
      message: 'Email verified successfully!',
      customToken,
    }
  } catch (error) {
    console.error('Error verifying PIN:', error)
    return {
      success: false,
      message: 'Server error during PIN verification.',
    }
  }
})
