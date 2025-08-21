import { d as defineEventHandler, e as readBody, f as adminFirestore, a as adminAuth } from '../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'firebase-admin/app';
import 'firebase-admin/auth';
import 'firebase-admin/firestore';
import 'ioredis';

var pin_post_default = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { code, enteredPin } = body;
    if (!code || !enteredPin || enteredPin.length !== 6) {
      return {
        success: false,
        message: "Missing code or PIN, or PIN is not 6 digits."
      };
    }
    const codeDocRef = adminFirestore.collection("verificationCodes").doc(code);
    const codeDocSnap = await codeDocRef.get();
    if (!codeDocSnap.exists) {
      return {
        success: false,
        message: "Verification code not found or expired."
      };
    }
    const data = codeDocSnap.data();
    if (data.expiresAt && data.expiresAt < Date.now()) {
      await codeDocRef.delete();
      return {
        success: false,
        message: "Verification code expired."
      };
    }
    if (data.pin !== enteredPin.toString()) {
      return {
        success: false,
        message: "Incorrect PIN."
      };
    }
    await adminFirestore.collection("users").doc(data.userId).update({
      emailVerified: true
    });
    await adminAuth.updateUser(data.userId, { emailVerified: true });
    const customToken = await adminAuth.createCustomToken(data.userId);
    await codeDocRef.delete();
    return {
      success: true,
      message: "Email verified successfully!",
      customToken
    };
  } catch (error) {
    console.error("Error verifying PIN:", error);
    return {
      success: false,
      message: "Server error during PIN verification."
    };
  }
});

export { pin_post_default as default };
//# sourceMappingURL=pin.post.mjs.map
