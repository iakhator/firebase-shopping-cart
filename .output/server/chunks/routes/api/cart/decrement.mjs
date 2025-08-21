import { d as defineEventHandler, e as readBody, r as redisClient_default } from '../../../nitro/nitro.mjs';
import { g as getUserOrGuestId } from '../../../_/authUtils.mjs';
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
import 'nanoid';

var decrement_default = defineEventHandler(async (event) => {
  const userId = await getUserOrGuestId(event);
  const { productId, variant, bundle } = await readBody(event);
  if (!userId) return { error: "User ID required" };
  const cartKey = `cart:${userId}`;
  const cartItems = await redisClient_default.lrange(cartKey, 0, -1);
  const itemIndex = cartItems.findIndex((item) => {
    const parsed = JSON.parse(item);
    return parsed.productId === productId && parsed.variant.color === variant.color && parsed.bundle === bundle;
  });
  if (itemIndex === -1) return { error: "Item not found in cart" };
  const parsedItem = JSON.parse(cartItems[itemIndex]);
  parsedItem.quantity -= 1;
  parsedItem.price -= parsedItem.originalPrice;
  if (parsedItem.quantity <= 0) {
    await redisClient_default.lrem(cartKey, 1, cartItems[itemIndex]);
    return {
      message: "Item removed from cart",
      cartItem: null
    };
  } else {
    await redisClient_default.lset(cartKey, itemIndex, JSON.stringify(parsedItem));
    return {
      message: "Quantity decreased",
      cartItem: parsedItem
    };
  }
});

export { decrement_default as default };
//# sourceMappingURL=decrement.mjs.map
