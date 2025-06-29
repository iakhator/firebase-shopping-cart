import { renderTemplate } from '../utils/renderTemplate'
import { sendEmail } from '../utils/sendEmail'

export async function sendOrderConfirmation({
  to,
  orderId,
  items,
  total,
  businessName = 'RingCart',
}) {
  const data = {
    orderId,
    total: total.toFixed(2),
    businessName,
    items: items.map((item) => ({
      ...item,
      priceTotal: (item.price * item.quantity).toFixed(2),
    })),
  }

  const { html, text } = await renderTemplate('order-confirmation', data)

  await sendEmail({
    to,
    subject: `Order confirmed for Order #${orderId}`,
    html,
    text,
  })
}
