import { d as defineEventHandler, e as readBody, c as createError, f as adminFirestore } from '../../../nitro/nitro.mjs';
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

var review_post_default = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { productId, userRating, userComment } = body;
    if (!productId || typeof userRating !== "number" || !userComment) {
      throw createError({
        statusCode: 400,
        statusMessage: "Missing required review fields"
      });
    }
    const reviewData = {
      productId,
      userRating,
      userComment,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
      // Optionally add user info if available
      // userId: user?.uid || null
      // userName: user?.name || 'Anonymous'
    };
    await adminFirestore.collection("reviews").add(reviewData);
    const productRef = adminFirestore.collection("products").doc(productId);
    const productSnap = await productRef.get();
    const productData = productSnap.data();
    const prevAvg = productData.averageRating || 0;
    const prevCount = productData.totalReviews || 0;
    const newAvg = (prevAvg * prevCount + userRating) / (prevCount + 1);
    await productRef.update({
      averageRating: newAvg,
      totalReviews: prevCount + 1
    });
    return {
      success: true,
      message: "Review added successfully",
      review: reviewData,
      averageRating: newAvg,
      totalReviews: prevCount + 1
    };
  } catch (error) {
    console.error("Error adding review:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to add review"
    });
  }
});

export { review_post_default as default };
//# sourceMappingURL=review.post.mjs.map
