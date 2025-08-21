import { d as defineEventHandler, g as getCookie, e as readBody, c as createError, a as adminAuth, f as adminFirestore } from '../../../nitro/nitro.mjs';
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

var favourite_post_default = defineEventHandler(async (event) => {
  try {
    const authToken = getCookie(event, "auth_token");
    const body = await readBody(event);
    const { productId, userId } = body;
    if (!productId || !userId) {
      throw createError({
        statusCode: 400,
        statusMessage: "Product ID and User ID are required"
      });
    }
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
    const favourites = userData.favourites || [];
    const isFavourite = favourites.includes(productId);
    let updatedFavourites;
    let message;
    let action;
    if (isFavourite) {
      updatedFavourites = favourites.filter((id) => id !== productId);
      message = "Removed from favourites";
      action = "removed";
    } else {
      updatedFavourites = [...favourites, productId];
      message = "Added to favourites";
      action = "added";
    }
    await userRef.update({
      favourites: updatedFavourites,
      favouriteCount: updatedFavourites.length,
      updatedAt: /* @__PURE__ */ new Date()
    });
    return {
      success: true,
      message,
      action,
      isFavourite: !isFavourite,
      favouriteCount: updatedFavourites.length
    };
  } catch (error) {
    console.error("Toggle favourite error:", error);
    if (error.statusCode) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to update favourite"
    });
  }
});

export { favourite_post_default as default };
//# sourceMappingURL=favourite.post.mjs.map
