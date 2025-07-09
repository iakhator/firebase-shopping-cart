import { d as defineEventHandler, g as getCookie, c as createError, a as adminAuth, r as readBody, f as adminFirestore } from '../../nitro/nitro.mjs';
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

var user_post_default = defineEventHandler(async (event) => {
  var _a;
  const idToken = getCookie(event, "auth_token");
  if (!idToken) {
    throw createError({ statusCode: 401, statusMessage: "No token found" });
  }
  let decodedToken;
  try {
    decodedToken = await adminAuth.verifyIdToken(idToken);
  } catch (err) {
    throw createError({ statusCode: 401, statusMessage: "Invalid token" });
  }
  const uid = decodedToken.uid;
  const user = await adminAuth.getUser(uid);
  const body = await readBody(event);
  const { createdDate, ...metadata } = body;
  const userRef = adminFirestore.collection("users").doc(uid);
  const doc = await userRef.get();
  if (doc.exists) {
    await userRef.update({
      ...metadata,
      lastUpdated: /* @__PURE__ */ new Date()
    });
  } else {
    await userRef.set({
      uid: user.uid,
      email: (_a = user.email) != null ? _a : "",
      createdDate: createdDate ? new Date(createdDate) : /* @__PURE__ */ new Date(),
      ...metadata
    });
  }
  return { success: true };
});

export { user_post_default as default };
//# sourceMappingURL=user.post.mjs.map
