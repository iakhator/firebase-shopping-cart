import { g as getCookie, b as deleteCookie } from '../nitro/nitro.mjs';
import { r as redisClient_default } from './redisClient.mjs';

async function syncCartOnLogin(event, userId, redis2) {
  const guestId = getCookie(event, "guest_id");
  if (guestId && userId) {
    const guestCartKey = `cart:${guestId}`;
    const userCartKey = `cart:${userId}`;
    const guestCart = await redis2.lrange(guestCartKey, 0, -1);
    if (guestCart.length > 0) {
      const userCart = await redis2.lrange(userCartKey, 0, -1);
      const mergedCart = [...userCart, ...guestCart];
      await redis2.del(userCartKey);
      await redis2.rpush(userCartKey, ...mergedCart);
    }
    await redis2.del(guestCartKey);
    deleteCookie(event, "guest_id");
  }
}
async function removeCartItem(userId) {
  const cartKey = `cart:${userId}`;
  try {
    const result = await redisClient_default.del(cartKey);
    if (result === 1)
      return { status: "success", message: "Cart removed successfully" };
  } catch (error) {
    return { status: "error", message: error.message };
  }
}

export { removeCartItem as r, syncCartOnLogin as s };
//# sourceMappingURL=cartUtils.mjs.map
