import { d as defineEventHandler, f as adminFirestore, h as setResponseStatus } from '../../nitro/nitro.mjs';
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

var user_get_default = defineEventHandler(async (event) => {
  const user = event.context.user;
  if (!user) return { authenticated: false, user: null };
  try {
    const userDoc = await adminFirestore.collection("users").doc(user.uid).get();
    if (!userDoc.exists) {
      console.error(`User document not found for uid: ${user.uid}`);
      return {
        authenticated: false,
        userProfileComplete: false
      };
    }
    const userData = userDoc.data();
    userData.userProfileComplete = true;
    userData.uid = user.uid;
    userData.role = user.role;
    return { authenticated: true, user: userData };
  } catch (error) {
    console.error("Authentication error:", error);
    if (error.code === "auth/id-token-expired") {
      setResponseStatus(event, 403);
      return { error: "Token has expired.", authenticated: false };
    }
    setResponseStatus(event, 500);
    return {
      authenticated: false,
      error: error.message || "Authentication failed"
    };
  }
});

export { user_get_default as default };
//# sourceMappingURL=user.get.mjs.map
