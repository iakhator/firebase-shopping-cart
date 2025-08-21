import { d as defineEventHandler, e as readBody, f as adminFirestore } from '../../../nitro/nitro.mjs';
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

var validate_code_post_default = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { code } = body;
    if (!code || typeof code !== "string" || code.length < 16) {
      return {
        success: false,
        message: "Invalid or missing verification code."
      };
    }
    const codeDoc = await adminFirestore.collection("verificationCodes").doc(code).get();
    if (!codeDoc.exists) {
      return {
        success: false,
        message: "Verification code not found or expired."
      };
    }
    const data = codeDoc.data();
    if (data.expiresAt && data.expiresAt < Date.now()) {
      await adminFirestore.collection("verificationCodes").doc(code).delete();
      return { success: false, message: "Verification code expired." };
    }
    return {
      success: true,
      userId: data.userId
    };
  } catch (error) {
    console.error("Error validating verification code:", error);
    return {
      success: false,
      message: "Server error validating verification code."
    };
  }
});

export { validate_code_post_default as default };
//# sourceMappingURL=validate-code.post.mjs.map
