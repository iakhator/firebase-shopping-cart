export default defineEventHandler(async (event) => {
  const { userId, productId, quantity, name, price, variant } = await readBody(
    event
  )
  if (!userId) return { error: 'User ID required' }

  const cartKey = `cart:${userId}`

  try {
    const existingProduct = await redis.hget(cartKey, productId)

    const updatedProduct = existingProduct
      ? {
          ...JSON.parse(existingProduct),
          quantity: JSON.parse(existingProduct).quantity + quantity,
          price: JSON.parse(existingProduct).price + price,
        }
      : { productId, name, price, variant, quantity }

    await redis.hset(cartKey, productId, JSON.stringify(updatedProduct))

    return { message: 'Product added to cart' }
  } catch (error) {
    return { message: error.message }
  }
})
