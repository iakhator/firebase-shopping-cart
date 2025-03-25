// export default defineEventHandler(async (event) => {
//   const { userId, productId, variant, bundle } = await readBody(event)
//   if (!userId) return { error: 'User ID required' }

//   const cartKey = `cart:${userId}`
//   const cartItems = await redis.lrange(cartKey, 0, -1)

//   let updated = false
//   let newCart = cartItems
//     .map((item) => {
//       const parsed = JSON.parse(item)
//       if (
//         parsed.productId === productId &&
//         parsed.variant === variant &&
//         parsed.bundle === bundle
//       ) {
//         parsed.quantity -= 1
//         parsed.totalPrice -= parsed.unitPrice
//         updated = true
//         return parsed.quantity > 0 ? JSON.stringify(parsed) : null
//       }
//       return item
//     })
//     .filter((item) => item !== null)

//   if (!updated) return { error: 'Item not found in cart' }

//   await redis.del(cartKey)
//   if (newCart.length > 0) {
//     await redis.rpush(cartKey, ...newCart)
//   }

//   return { message: 'Quantity decreased or item removed' }
// })
//

export default defineEventHandler(async (event) => {
  const userId = await getUserOrGuestId(event)
  const { productId, variant, bundle } = await readBody(event)
  if (!userId) return { error: 'User ID required' }

  const cartKey = `cart:${userId}`
  const cartItems = await redis.lrange(cartKey, 0, -1)

  const itemIndex = cartItems.findIndex((item) => {
    const parsed = JSON.parse(item)
    return (
      parsed.productId === productId &&
      parsed.variant.color === variant.color &&
      parsed.bundle === bundle
    )
  })

  if (itemIndex === -1) return { error: 'Item not found in cart' }

  const parsedItem = JSON.parse(cartItems[itemIndex])

  // Decrement quantity
  parsedItem.quantity -= 1
  parsedItem.price -= parsedItem.originalPrice

  // Remove if quantity hits 0
  if (parsedItem.quantity <= 0) {
    await redis.lrem(cartKey, 1, cartItems[itemIndex])
    return {
      message: 'Item removed from cart',
      cartItem: null,
    }
  } else {
    // Update the item in Redis
    await redis.lset(cartKey, itemIndex, JSON.stringify(parsedItem))
    return {
      message: 'Quantity decreased',
      cartItem: parsedItem,
    }
  }
})
