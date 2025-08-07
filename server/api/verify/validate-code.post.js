import { adminFirestore as db } from '~/server/utils/firebaseAdmin'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { code } = body

    if (!code || typeof code !== 'string' || code.length < 16) {
      return {
        success: false,
        message: 'Invalid or missing verification code.',
      }
    }

    const codeDoc = await db.collection('verificationCodes').doc(code).get()
    if (!codeDoc.exists) {
      return {
        success: false,
        message: 'Verification code not found or expired.',
      }
    }

    const data = codeDoc.data()
    if (data.expiresAt && data.expiresAt < Date.now()) {
      // Delete expired code from DB
      await db.collection('verificationCodes').doc(code).delete()
      return { success: false, message: 'Verification code expired.' }
    }

    return {
      success: true,
      userId: data.userId,
    }
  } catch (error) {
    console.error('Error validating verification code:', error)
    return {
      success: false,
      message: 'Server error validating verification code.',
    }
  }
})
