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

var delete_default = defineEventHandler(async (event) => {
  const userId = await getUserOrGuestId(event);
  const { productId, variant, bundle } = await readBody(event);
  if (!userId) return { error: "User ID required" };
  const cartKey = `cart:${userId}`;
  const cartItems = await redisClient_default.lrange(cartKey, 0, -1);
  const itemToDelete = cartItems.find((item) => {
    const parsed = JSON.parse(item);
    return parsed.productId === productId && parsed.variant.color === variant.color && parsed.bundle === bundle;
  });
  if (!itemToDelete) return { error: "Item not found in cart" };
  await redisClient_default.lrem(cartKey, 1, itemToDelete);
  return {
    message: "Item deleted from cart"
  };
});

export { delete_default as default };
//# sourceMappingURL=delete.mjs.map
