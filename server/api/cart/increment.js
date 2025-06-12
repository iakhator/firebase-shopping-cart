import redis from '~/server/utils/redisClient'

export default defineEventHandler(async (event) => {
  const userId = await getUserOrGuestId(event)

  const { productId, variant, bundle } = await readBody(event)
  if (!userId) return { error: 'User ID required' }

  const cartKey = `cart:${userId}`

  const cartItems = await redis.lrange(cartKey, 0, -1)

  // Find index of the target item
  const itemIndex = cartItems.findIndex((item) => {
    const parsed = JSON.parse(item)
    return (
      parsed.productId === productId &&
      parsed.variant?.color === variant?.color &&
      parsed.bundle === bundle
    )
  })

  if (itemIndex === -1) return { error: 'Item not found in cart' }

  const parsedItem = JSON.parse(cartItems[itemIndex])
  parsedItem.quantity += 1
  parsedItem.price += parsedItem.originalPrice

  // Replace only the updated item in Redis
  await redis.lset(cartKey, itemIndex, JSON.stringify(parsedItem))

  return {
    message: 'Quantity increased',
    cartItem: parsedItem,
  }
})
