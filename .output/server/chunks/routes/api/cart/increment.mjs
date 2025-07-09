import { d as defineEventHandler, r as readBody } from '../../../nitro/nitro.mjs';
import { g as getUserOrGuestId } from '../../../_/authUtils.mjs';
import { r as redisClient_default } from '../../../_/redisClient.mjs';
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
import 'nanoid';
import 'ioredis';

var increment_default = defineEventHandler(async (event) => {
  const userId = await getUserOrGuestId(event);
  const { productId, variant, bundle } = await readBody(event);
  if (!userId) return { error: "User ID required" };
  const cartKey = `cart:${userId}`;
  const cartItems = await redisClient_default.lrange(cartKey, 0, -1);
  const itemIndex = cartItems.findIndex((item) => {
    var _a;
    const parsed = JSON.parse(item);
    return parsed.productId === productId && ((_a = parsed.variant) == null ? void 0 : _a.color) === (variant == null ? void 0 : variant.color) && parsed.bundle === bundle;
  });
  if (itemIndex === -1) return { error: "Item not found in cart" };
  const parsedItem = JSON.parse(cartItems[itemIndex]);
  parsedItem.quantity += 1;
  parsedItem.price += parsedItem.originalPrice;
  await redisClient_default.lset(cartKey, itemIndex, JSON.stringify(parsedItem));
  return {
    message: "Quantity increased",
    cartItem: parsedItem
  };
});

export { increment_default as default };
//# sourceMappingURL=increment.mjs.map
