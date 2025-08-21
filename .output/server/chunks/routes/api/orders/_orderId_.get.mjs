import { d as defineEventHandler, i as getRouterParam, g as getCookie, a as adminAuth, c as createError, f as adminFirestore } from '../../../nitro/nitro.mjs';
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

var orderId_get_default = defineEventHandler(async (event) => {
  const orderId = getRouterParam(event, "orderId");
  const authToken = getCookie(event, "auth_token");
  const user = await adminAuth.verifyIdToken(authToken);
  if (!orderId) {
    throw createError({
      statusCode: 400,
      statusMessage: "Order ID is required"
    });
  }
  const orderDoc = await adminFirestore.collection("orders").doc(orderId).get();
  if (!orderDoc.exists) {
    throw createError({
      statusCode: 404,
      statusMessage: "Order not found"
    });
  }
  const order = orderDoc.data();
  if (order.userId !== user.uid) {
    throw createError({
      statusCode: 403,
      statusMessage: "Access denied"
    });
  }
  return { order };
});

export { orderId_get_default as default };
//# sourceMappingURL=_orderId_.get.mjs.map
