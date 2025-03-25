import { getUserOrGuestId } from '~/server/utils/authUtils'

export default defineEventHandler(async (event) => {
  const {
    productId,
    quantity,
    originalPrice,
    name,
    price,
    variant,
    bundle,
    imageUrl,
  } = await readBody(event)

  const userId = await getUserOrGuestId(event)

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
      newCartItem = {
        productId,
        name,
        price,
        originalPrice,
        variant,
        quantity,
        bundle,
        imageUrl,
      }
      newCart.push(JSON.stringify(newCartItem))
    } else {
      newCartItem = JSON.parse(
        newCart.find((item) => {
          const parsedItem = JSON.parse(item)
          return (
            parsedItem.productId === productId &&
            parsedItem.variant === variant &&
            parsedItem.bundle === bundle
          )
        }),
      )
    }

    await redis.del(cartKey)
    await redis.rpush(cartKey, ...newCart)

    return { cartItem: newCartItem, message: 'Product added to cart' }
  } catch (error) {
    return { error: error.message }
  }
})
