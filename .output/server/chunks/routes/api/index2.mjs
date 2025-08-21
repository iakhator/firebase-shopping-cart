import { d as defineEventHandler, g as getCookie, c as createError, a as adminAuth, f as adminFirestore } from '../../nitro/nitro.mjs';
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

var orders_default = defineEventHandler(async (event) => {
  try {
    const authToken = getCookie(event, "auth_token");
    if (!authToken) {
      throw createError({
        statusCode: 401,
        statusMessage: "Authentication token required"
      });
    }
    const user = await adminAuth.verifyIdToken(authToken);
    const ordersSnapshot = await adminFirestore.collection("orders").where("userId", "==", user.uid).orderBy("createdAt", "desc").get();
    const orders = [];
    ordersSnapshot.forEach((doc) => {
      orders.push({
        id: doc.id,
        ...doc.data()
      });
    });
    return { orders };
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch orders"
    });
  }
});

export { orders_default as default };
//# sourceMappingURL=index2.mjs.map
