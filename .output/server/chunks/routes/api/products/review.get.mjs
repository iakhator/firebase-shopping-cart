import { d as defineEventHandler, j as getQuery, c as createError, f as adminFirestore } from '../../../nitro/nitro.mjs';
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

var review_get_default = defineEventHandler(async (event) => {
  try {
    const { productId } = getQuery(event);
    if (!productId) {
      throw createError({
        statusCode: 400,
        statusMessage: "Missing productId in query"
      });
    }
    const reviewsSnapshot = await adminFirestore.collection("reviews").where("productId", "==", productId).orderBy("createdAt", "desc").get();
    const reviews = [];
    reviewsSnapshot.forEach((doc) => {
      const data = doc.data();
      reviews.push({ id: doc.id, ...data });
    });
    return {
      success: true,
      reviews
    };
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch reviews"
    });
  }
});

export { review_get_default as default };
//# sourceMappingURL=review.get.mjs.map
