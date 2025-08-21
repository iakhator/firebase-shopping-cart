import { d as defineEventHandler, e as readBody, a as adminAuth, c as createError, f as adminFirestore, s as setCookie, r as redisClient_default, b as deleteCookie, h as setResponseStatus } from '../../../nitro/nitro.mjs';
import { s as syncCartOnLogin } from '../../../_/cartUtils.mjs';
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

var session_post_default = defineEventHandler(async (event) => {
  const { idToken, refreshToken } = await readBody(event);
  if (!idToken) return { authenticated: false };
  try {
    const decodedToken = await adminAuth.verifyIdToken(idToken, true);
    const userId = decodedToken.uid;
    const userRecord = await adminAuth.getUser(userId);
    if (!userRecord.emailVerified) {
      throw createError({
        statusCode: 403,
        statusMessage: "Please verify your email address before signing in. Check your inbox for the verification link."
      });
    }
    const userRef = adminFirestore.collection("users").doc(userId);
    const userDoc = await userRef.get();
    if (userDoc.exists) {
      const userData = userDoc.data();
      if (!userData.emailVerified) {
        await userRef.update({
          emailVerified: true,
          lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
        });
      }
    }
    setCookie(event, "auth_token", idToken, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      maxAge: 3600,
      path: "/"
    });
    setCookie(event, "user_id", userId, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      maxAge: 60 * 60 * 24,
      // 1 days
      path: "/"
    });
    redisClient_default.set(`refreshToken:${userId}`, refreshToken, "EX", 60 * 60 * 24 * 7);
    await syncCartOnLogin(event, userId, redisClient_default);
    return { authenticated: true, user: decodedToken };
  } catch (error) {
    deleteCookie(event, "auth_token");
    if (error.code === "auth/id-token-expired") {
      setResponseStatus(event, 403);
      return { error: "Token has expired.", authenticated: false };
    }
    if (error.code === "auth/invalid-refresh-token") {
      setResponseStatus(event, 403);
      return { error: "Invalid refresh token.", authenticated: false };
    }
    setResponseStatus(event, 500);
    return { error: "Failed to refresh token.", authenticated: false };
  }
});

export { session_post_default as default };
//# sourceMappingURL=session.post.mjs.map
