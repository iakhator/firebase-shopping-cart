import { adminAuth } from '~/server/utils/firebaseAdmin'
import { getUserOrGuestId } from '~/server/utils/authUtils'

export default defineEventHandler(async (event) => {
  const userId = await getUserOrGuestId(event, adminAuth)
  const { productId, variant, bundle } = await readBody(event)
  if (!userId) return { error: 'User ID required' }

  const cartKey = `cart:${userId}`
  const cartItems = await redis.lrange(cartKey, 0, -1)

  const itemToDelete = cartItems.find((item) => {
    const parsed = JSON.parse(item)
    return (
      parsed.productId === productId &&
      parsed.variant.color === variant.color &&
      parsed.bundle === bundle
    )
  })

  if (!itemToDelete) return { error: 'Item not found in cart' }

  await redis.lrem(cartKey, 1, itemToDelete)

  return {
    message: 'Item deleted from cart',
  }
})
