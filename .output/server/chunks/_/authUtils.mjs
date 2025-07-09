import { g as getCookie, a as adminAuth, s as setCookie } from '../nitro/nitro.mjs';
import { nanoid } from 'nanoid';

async function getUserOrGuestId(event) {
  let userId;
  const authToken = getCookie(event, "auth_token");
  if (authToken) {
    try {
      const payload = await adminAuth.verifyIdToken(authToken, true);
      userId = payload == null ? void 0 : payload.uid;
    } catch (error) {
      console.warn("Invalid token:", error.message);
    }
  }
  let guestId;
  if (!userId) {
    guestId = getCookie(event, "guest_id");
    if (!guestId) {
      guestId = nanoid();
      setCookie(event, "guest_id", guestId, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7
        // Expires in 7 days
      });
    }
  }
  return userId || guestId;
}

export { getUserOrGuestId as g };
//# sourceMappingURL=authUtils.mjs.map
