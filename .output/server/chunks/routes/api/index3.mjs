import { d as defineEventHandler, i as getQuery, f as adminFirestore, e as setResponseStatus } from '../../nitro/nitro.mjs';
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

var products_default = defineEventHandler(async (event) => {
  var _a, _b, _c;
  try {
    const query = getQuery(event);
    const brands = ((_a = query.brands) == null ? void 0 : _a.split(",").map((brand) => brand.toLowerCase())) || [];
    const priceRanges = ((_b = query.priceRanges) == null ? void 0 : _b.split(",")) || [];
    const storage = ((_c = query.storage) == null ? void 0 : _c.split(",")) || [];
    let productsRef = adminFirestore.collection("products");
    let queryRef = productsRef;
    if (brands.length) {
      queryRef = queryRef.where("categoryId", "in", brands);
    }
    if (storage.length) {
      queryRef = queryRef.where("storage", "array-contains-any", storage);
    }
    if (priceRanges.length === 1) {
      const range = parsePriceRange(priceRanges[0]);
      queryRef = queryRef.where("price", ">=", range.min).where("price", "<=", range.max);
    }
    const snapshot = await queryRef.get();
    let products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    return { products };
  } catch (error) {
    console.error("Error fetching products:", error.message);
    setResponseStatus(event, 500);
    return { message: "Failed to fetch products" };
  }
});
function parsePriceRange(label) {
  var _a;
  const parts = label.replace("$", "").split("-");
  const min = parseFloat(parts[0]);
  const max = ((_a = parts[1]) == null ? void 0 : _a.includes("+")) ? Infinity : parseFloat(parts[1]) || Infinity;
  return { min, max };
}

export { products_default as default };
//# sourceMappingURL=index3.mjs.map
