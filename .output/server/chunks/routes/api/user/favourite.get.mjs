import { d as defineEventHandler, i as getRouterParam, c as createError, g as getCookie, a as adminAuth, f as adminFirestore } from '../../../nitro/nitro.mjs';
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

var favourite_get_default = defineEventHandler(async (event) => {
  try {
    const userId = getRouterParam(event, "userId");
    if (!userId) {
      throw createError({
        statusCode: 400,
        statusMessage: "User ID is required"
      });
    }
    const authToken = getCookie(event, "auth_token");
    if (!authToken) {
      throw createError({
        statusCode: 401,
        statusMessage: "Authorization token required"
      });
    }
    const decodedToken = await adminAuth.verifyIdToken(authToken);
    if (decodedToken.uid !== userId) {
      throw createError({
        statusCode: 403,
        statusMessage: "Unauthorized"
      });
    }
    const userRef = adminFirestore.collection("users").doc(userId);
    const userDoc = await userRef.get();
    if (!userDoc.exists) {
      throw createError({
        statusCode: 404,
        statusMessage: "User not found"
      });
    }
    const userData = userDoc.data();
    const favouriteIds = userData.favourites || [];
    if (favouriteIds.length === 0) {
      return {
        success: true,
        data: {
          favourites: [],
          count: 0
        }
      };
    }
    const productPromises = favouriteIds.map(async (productId) => {
      const productRef = adminFirestore.collection("products").doc(productId);
      const productDoc = await productRef.get();
      if (productDoc.exists) {
        return {
          id: productId,
          ...productDoc.data()
        };
      }
      return null;
    });
    const products = await Promise.all(productPromises);
    const validProducts = products.filter((product) => product !== null);
    if (validProducts.length !== favouriteIds.length) {
      const validIds = validProducts.map((p) => p.id);
      await userRef.update({
        favourites: validIds,
        favouriteCount: validIds.length,
        updatedAt: /* @__PURE__ */ new Date()
      });
    }
    return {
      success: true,
      data: {
        favourites: validProducts,
        count: validProducts.length
      }
    };
  } catch (error) {
    console.error("Get favourites error:", error);
    if (error.statusCode) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch favourites"
    });
  }
});

export { favourite_get_default as default };
//# sourceMappingURL=favourite.get.mjs.map
