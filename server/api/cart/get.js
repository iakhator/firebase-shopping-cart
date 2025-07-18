import redis from '~/server/utils/redisClient'

export default defineEventHandler(async (event) => {
  const userId = await getUserOrGuestId(event)

  if (!userId) return { error: 'User ID required' }
  const cartKey = `cart:${userId}`

  try {
    const cartItems = await redis.lrange(cartKey, 0, -1)
    const cart = cartItems.map((item) => JSON.parse(item))

    return { cart }
  } catch (error) {
    return { message: error.message }
  }
})
