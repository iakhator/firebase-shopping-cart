import { d as defineEventHandler, e as readBody, a as adminAuth, f as adminFirestore, h as setResponseStatus } from '../../../nitro/nitro.mjs';
import { s as sendEmailVerificationLink } from '../../../_/emailService.mjs';
import require$$1 from 'crypto';
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
import 'dayjs';
import 'fs/promises';
import 'path';
import 'fs';
import 'module';

var register_post_default = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const user = await adminAuth.createUser(body);
    if (!user.uid) return;
    if (body.role && body.role === "admin") {
      await adminAuth.setCustomUserClaims(user.uid, { role: "admin" });
    } else {
      await adminAuth.setCustomUserClaims(user.uid, { role: "user" });
    }
    const userRef = adminFirestore.collection("users").doc(user.uid);
    await userRef.set({
      uid: user.uid,
      email: user.email,
      firstName: body.firstName || "",
      lastName: body.lastName || "",
      displayName: body.displayName,
      emailVerified: false,
      createdDate: body.createdDate,
      lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
    });
    const verificationCode = require$$1.randomUUID();
    const pin = Math.floor(1e5 + Math.random() * 9e5).toString();
    const expiresAt = Date.now() + 20 * 60 * 1e3;
    await adminFirestore.collection("verificationCodes").doc(verificationCode).set({
      userId: user.uid,
      pin,
      expiresAt
    });
    await sendEmailVerificationLink({
      email: user.email,
      pin,
      firstName: body.firstName
    });
    setResponseStatus(event, 201);
    return {
      success: true,
      code: verificationCode,
      message: "Account created successfully. Please check your email to verify your account before signing in."
    };
  } catch (error) {
    setResponseStatus(event, 400);
    let errorMessage = "Failed to create user.";
    if (error.code === "auth/email-already-exists") {
      errorMessage = "An account with this email already exists.";
    } else if (error.code === "auth/invalid-email") {
      errorMessage = "Invalid email address.";
    } else if (error.code === "auth/weak-password") {
      errorMessage = "Password is too weak.";
    }
    return {
      success: false,
      message: errorMessage
    };
  }
});

export { register_post_default as default };
//# sourceMappingURL=register.post.mjs.map
