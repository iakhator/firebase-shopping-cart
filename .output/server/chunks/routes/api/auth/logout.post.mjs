import { d as defineEventHandler, g as getCookie, a as adminAuth, b as deleteCookie, c as createError } from '../../../nitro/nitro.mjs';
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

var logout_post_default = defineEventHandler(async (event) => {
  const authToken = getCookie(event, "auth_token");
  if (!authToken) return { success: false, message: "No active session" };
  try {
    await adminAuth.verifyIdToken(authToken, true);
    deleteCookie(event, "auth_token", { path: "/" });
    deleteCookie(event, "refresh_token", { path: "/" });
    return { success: true };
  } catch (error) {
    throw createError({ statusCode: 500, message: "Failed to log out" });
  }
});

export { logout_post_default as default };
//# sourceMappingURL=logout.post.mjs.map
