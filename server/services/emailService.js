import dayjs from 'dayjs'
import { renderTemplate } from '../utils/renderTemplate'
import { sendEmail } from '../utils/sendEmail'

export async function sendOrderConfirmation({
  to,
  orderId,
  items,
  total,
  shippingAddress,
}) {
  const data = {
    orderId,
    orderDate: dayjs(new Date().toISOString()).format('DD/MM/YYYY'),
    shippingAddress,
    total: total.toFixed(2),
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
