import { db } from '../config/firebaseConfig.js'

export const saveOrders = async (req, res) => {
  try {
    const orders = {
      items: req.body.cartItem,
    }
    await db.collection('users').doc(req.uid).collection('orders').add(orders)
    delete req.session.cart
    res.status(200).json({ message: 'Your payment was successful' })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
