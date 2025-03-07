// export default defineEventHandler(async (event) => {
//   const { userId, productId, quantity, name, price, variant, bundle } =
//     await readBody(event)

//   if (!userId) return { error: 'User ID required' }

//   const cartKey = `cart:${userId}`
//   const uniqueKey = `${productId}:${variant}:${bundle}`

//   try {
//     const existingProduct = await redis.hget(cartKey, uniqueKey)

//     const updatedProduct = existingProduct
//       ? {
//           ...JSON.parse(existingProduct),
//           quantity: JSON.parse(existingProduct).quantity + quantity,
//         }
//       : { productId, name, price, variant, bundle, quantity }

//     await redis.hset(cartKey, uniqueKey, JSON.stringify(updatedProduct))

//     return { message: 'Product added to cart', cartItem: updatedProduct }
//   } catch (error) {
//     return { message: error.message }
//   }
// })
export default defineEventHandler(async (event) => {
  const { userId, productId, quantity, name, price, variant, bundle } =
    await readBody(event)

  if (!userId) return { error: 'User ID required' }

  const cartKey = `cart:${userId}`

  try {
    const cartItems = await redis.lrange(cartKey, 0, -1)

    let updated = false
    let newCart = cartItems.map((item) => {
      const parsedItem = JSON.parse(item)

      if (
        parsedItem.productId === productId &&
        parsedItem.variant === variant &&
        parsedItem.bundle === bundle
      ) {
        parsedItem.quantity += quantity
        parsedItem.price += price
        updated = true
        return JSON.stringify(parsedItem)
      }

      return item
    })

    let newCartItem
    if (!updated) {
      newCartItem = { productId, name, price, variant, quantity, bundle }
      newCart.push(JSON.stringify(newCartItem))
    } else {
      newCartItem = JSON.parse(
        newCart.find((item) => JSON.parse(item).productId === productId)
      )
    }

    await redis.del(cartKey)
    await redis.rpush(cartKey, ...newCart)

    return { cartItem: newCartItem, message: 'Product added to cart' }
  } catch (error) {
    return { error: error.message }
  }
})
