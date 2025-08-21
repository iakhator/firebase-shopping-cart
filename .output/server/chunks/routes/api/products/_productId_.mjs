import { d as defineEventHandler, f as adminFirestore, h as setResponseStatus } from '../../../nitro/nitro.mjs';
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

var productId_default = defineEventHandler(async (event) => {
  const { productId } = event.context.params;
  try {
    const productDoc = await adminFirestore.collection("products").doc(productId).get();
    if (!productDoc.exists) {
      setResponseStatus(event, 404);
      return { message: "Product not found" };
    }
    return { product: { ...productDoc.data(), id: productDoc.id } };
  } catch (error) {
    console.error("Error fetching product:", error);
    setResponseStatus(event, 500);
    return {
      message: "Failed to fetch product",
      error
    };
  }
});

export { productId_default as default };
//# sourceMappingURL=_productId_.mjs.map
