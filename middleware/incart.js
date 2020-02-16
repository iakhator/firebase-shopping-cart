export default function ({ store, redirect }) {
  // If there is an item in cart
  if (store.state.cartItems.cartItem.length < 1) {
    return redirect('/')
  }
}
