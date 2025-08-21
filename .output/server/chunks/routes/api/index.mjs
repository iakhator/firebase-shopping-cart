import { d as defineEventHandler, f as adminFirestore, H as H3Error } from '../../nitro/nitro.mjs';
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

var categories_default = defineEventHandler(async (event) => {
  try {
    const categories = [];
    const allCategories = await adminFirestore.collection("categories").get();
    allCategories.forEach((doc) => {
      categories.push({ ...doc.data(), id: doc.id });
    });
    return {
      success: true,
      categories
    };
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new H3Error({
      statusCode: 500,
      statusMessage: "Failed to fetch categories"
    });
  }
});

export { categories_default as default };
//# sourceMappingURL=index.mjs.map
