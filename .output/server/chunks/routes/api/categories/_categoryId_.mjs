import { d as defineEventHandler, f as adminFirestore, H as H3Error } from '../../../nitro/nitro.mjs';
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

var categoryId_default = defineEventHandler(async (event) => {
  const { categoryId: id } = event.context.params;
  const categoryProducts = [];
  try {
    const productsSnapshot = await adminFirestore.collection("products").where("categoryId", "==", id).get();
    productsSnapshot.forEach((doc) => {
      categoryProducts.push({ ...doc.data(), id: doc.id });
    });
    return {
      success: true,
      products: categoryProducts
    };
  } catch (error) {
    console.error("Error fetching category products:", error);
    throw new H3Error({
      statusCode: 500,
      statusMessage: "Failed to fetch category products"
    });
  }
});

export { categoryId_default as default };
//# sourceMappingURL=_categoryId_.mjs.map
