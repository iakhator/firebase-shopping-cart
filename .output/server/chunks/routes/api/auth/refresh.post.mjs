import { d as defineEventHandler, u as useRuntimeConfig, g as getCookie, r as redisClient_default, s as setCookie, b as deleteCookie } from '../../../nitro/nitro.mjs';
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

var refresh_post_default = defineEventHandler(async (event) => {
  var _a;
  const config = useRuntimeConfig();
  const userId = getCookie(event, "user_id");
  if (!userId) {
    return { success: false, message: "No user id found" };
  }
  const refreshToken = await redisClient_default.get(`refreshToken:${userId}`);
  if (!refreshToken) {
    return { success: false, message: "No refresh token found" };
  }
  try {
    const response = await $fetch(
      `https://securetoken.googleapis.com/v1/token?key=${config.public.FIREBASE_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          grant_type: "refresh_token",
          refresh_token: refreshToken
        })
      }
    );
    const refreshed = await response;
    if (!response.user_id) {
      const errorMessage = ((_a = refreshed.error) == null ? void 0 : _a.message) || "Unknown error";
      if (errorMessage === "INVALID_GRANT") {
        return {
          success: false,
          message: "Refresh token is invalid or expired"
        };
      }
      return {
        success: false,
        message: `Token refresh failed: ${errorMessage}`
      };
    }
    const newIdToken = refreshed.access_token;
    const newRefreshToken = refreshed.refresh_token;
    setCookie(event, "auth_token", newIdToken, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      maxAge: 3600,
      path: "/"
    });
    return { success: true, token: newIdToken };
  } catch (error) {
    deleteCookie(event, "auth_token");
    redisClient_default.delete(`refreshToken:${userId}`);
    return { success: false, message: "Token refresh failed", error };
  }
});

export { refresh_post_default as default };
//# sourceMappingURL=refresh.post.mjs.map
