import redis from '~/server/utils/redisClient'

export async function syncCartOnLogin(event, userId, redis) {
  const guestId = getCookie(event, 'guest_id')

  if (guestId && userId) {
    const guestCartKey = `cart:${guestId}`
    const userCartKey = `cart:${userId}`

    const guestCart = await redis.lrange(guestCartKey, 0, -1)

    if (guestCart.length > 0) {
      // Merge guest cart into user cart
      const userCart = await redis.lrange(userCartKey, 0, -1)
      const mergedCart = [...userCart, ...guestCart]

      // Save merged cart
      await redis.del(userCartKey)
      await redis.rpush(userCartKey, ...mergedCart)
    }

    // Remove guest cart
    await redis.del(guestCartKey)
    deleteCookie(event, 'guest_id')
  }
}

export async function removeCartItem(userId) {
  const cartKey = `cart:${userId}`

  try {
    const result = await redis.del(cartKey)
    if (result === 1)
      return { status: 'success', message: 'Cart removed successfully' }
  } catch (error) {
    return { status: 'error', message: error.message }
  }
}
