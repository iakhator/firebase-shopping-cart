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

var add_default = defineEventHandler(async (event) => {
  const {
    productId,
    quantity,
    originalPrice,
    name,
    price,
    variant,
    bundle,
    imageUrl
  } = await readBody(event);
  const userId = await getUserOrGuestId(event);
  if (!userId) return { error: "User ID required" };
  const cartKey = `cart:${userId}`;
  try {
    const cartItems = await redisClient_default.lrange(cartKey, 0, -1);
    let updated = false;
    let newCart = cartItems.map((item) => {
      const parsedItem = JSON.parse(item);
      if (parsedItem.productId === productId && parsedItem.variant.color === variant.color && parsedItem.bundle === bundle) {
        parsedItem.quantity += quantity;
        parsedItem.price += price;
        updated = true;
        return JSON.stringify(parsedItem);
      }
      return item;
    });
    let newCartItem;
    if (!updated) {
      newCartItem = {
        productId,
        name,
        price,
        originalPrice,
        variant,
        quantity,
        bundle,
        imageUrl
      };
      newCart.push(JSON.stringify(newCartItem));
    } else {
      newCartItem = JSON.parse(
        newCart.find((item) => {
          const parsedItem = JSON.parse(item);
          return parsedItem.productId === productId && parsedItem.variant === variant && parsedItem.bundle === bundle;
        })
      );
    }
    await redisClient_default.del(cartKey);
    await redisClient_default.rpush(cartKey, ...newCart);
    return { cartItem: newCartItem, message: "Product added to cart" };
  } catch (error) {
    return { error: error.message };
  }
});

export { add_default as default };
//# sourceMappingURL=add.mjs.map
