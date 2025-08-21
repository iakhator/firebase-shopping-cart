import { d as defineEventHandler, j as getQuery, f as adminFirestore } from '../../../nitro/nitro.mjs';
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

var similar_get_default = defineEventHandler(async (event) => {
  const { categoryId, excludeId } = getQuery(event);
  const snapshot = await adminFirestore.collection("products").where("categoryId", "==", categoryId).where("__name__", "!=", excludeId).limit(8).get();
  const products = [];
  snapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
  });
  return { products };
});

export { similar_get_default as default };
//# sourceMappingURL=similar.get.mjs.map
