import dayjs from 'dayjs'
import { renderTemplate } from '../utils/renderTemplate'
import { sendEmail } from '../utils/sendEmail'

export async function sendOrderConfirmation({
  to,
  customerName,
  orderId,
  items,
  total,
  shippingAddress,
}) {
  const data = {
    orderId,
    customerName,
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

export async function sendEmailVerificationLink({ email, pin, firstName }) {
  try {
    const data = {
      email,
      pin,
      firstName,
    }

    const { html, text } = await renderTemplate('email-verification', data)

    const result = await sendEmail({
      to: email,
      subject: 'Verify your email address',
      html,
      text,
    })


    if (!result?.success) {
      return {
        success: false,
        error: result?.error || 'Email sending failed',
      }
    }

    return {
      success: true,
    }

  } catch (err) {
    console.error('sendEmailVerificationLink failed:', err)

    return {
      success: false,
      error: err.message || 'Could not send verification email',
    }
  }
}
