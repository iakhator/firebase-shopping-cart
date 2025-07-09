import { d as defineEventHandler } from '../../../nitro/nitro.mjs';
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

var get_default = defineEventHandler(async (event) => {
  const userId = await getUserOrGuestId(event);
  if (!userId) return { error: "User ID required" };
  const cartKey = `cart:${userId}`;
  try {
    const cartItems = await redisClient_default.lrange(cartKey, 0, -1);
    const cart = cartItems.map((item) => JSON.parse(item));
    return { cart };
  } catch (error) {
    return { message: error.message };
  }
});

export { get_default as default };
//# sourceMappingURL=get.mjs.map
