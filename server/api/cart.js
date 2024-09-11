import { useCart } from '~/composables/useCart'

export default defineEventHandler(async (event) => {
  event.res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  const method = getMethod(event)

  // Parse request body
  const body = await readBody(event)
  const sessionCart = event.req.session?.cart

  const {
    addToCart,
    getCart,
    decrementQty,
    incrementQty,
    removeItemCart,
    checkOut,
  } = useCart()

  console.log(method, 'method')

  if (method === 'POST') {
    const productId = body.productId
    const cart = addToCart(body, productId)
    event.context.session.cart = cart

    console.log(cart, 'cart')
    return cart
  }

  if (method === 'GET') {
    try {
      return getCart(sessionCart)
    } catch (error) {
      return { message: error.message }
    }
  }

  if (method === 'PUT') {
    const cartId = body.cartId
    const cart = incrementQty(sessionCart, cartId)
    event.context.session.cart = cart
    return cart
  }

  if (method === 'PATCH') {
    const cartId = body.cartId
    const cart = decrementQty(sessionCart, cartId)
    event.context.session.cart = cart
    return cart
  }

  if (method === 'DELETE') {
    const itemId = body.id
    const cart = removeItemCart(sessionCart, itemId)
    event.req.session.cart = cart
    return { message: 'Item deleted' }
  }
})
