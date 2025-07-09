import { d as defineEventHandler, r as readBody, a as adminAuth, s as setCookie, b as deleteCookie, e as setResponseStatus } from '../../../nitro/nitro.mjs';
import { s as syncCartOnLogin } from '../../../_/cartUtils.mjs';
import { r as redisClient_default } from '../../../_/redisClient.mjs';
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
    setCookie(event, "auth_token", idToken, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      maxAge: 3600,
      path: "/"
    });
    setCookie(event, "refresh_token", refreshToken, {
      secure: true,
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
      // 7 days
      path: "/"
    });
    await syncCartOnLogin(event, decodedToken.uid, redisClient_default);
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
