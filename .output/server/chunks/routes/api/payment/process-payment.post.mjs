import { d as defineEventHandler, r as readBody, f as adminFirestore, c as createError } from '../../../nitro/nitro.mjs';
import Stripe from 'stripe';
import { nanoid } from 'nanoid';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'firebase-admin/app';
import 'firebase-admin/auth';
import 'firebase-admin/firestore';

function generateOrderId() {
  const timestamp = Date.now().toString(36);
  const random = nanoid(8);
  return `ORD-${timestamp}-${random}`.toUpperCase();
}

const stripe = new Stripe(process.env.STRIPE_SECRET);
var process_payment_post_default = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const {
    amount,
    items,
    userId,
    customerName,
    shippingAddress,
    currency = "usd",
    savePaymentMethod = false
  } = body;
  let customerId = null;
  if (userId) {
    try {
      const userDoc = await adminFirestore.collection("users").doc(userId).get();
      if (userDoc.exists && userDoc.data().stripeCustomerId) {
        customerId = userDoc.data().stripeCustomerId;
      } else {
        const customer = await stripe.customers.create({ email: user.email });
        await adminFirestore.collection("users").doc(userId).set(
          {
            stripeCustomerId: customer.id
          },
          { merge: true }
        );
        customerId = customer.id;
      }
    } catch (err) {
      console.error("Error verifying user:", err);
      throw createError({ statusCode: 401, message: "Unauthenticated" });
    }
  } else {
    const guestCustomer = await stripe.customers.create();
    customerId = guestCustomer.id;
  }
  const formattedAmount = Math.round(amount * 100);
  const orderId = generateOrderId();
  const paymentIntent = await stripe.paymentIntents.create({
    amount: formattedAmount,
    currency,
    customer: customerId,
    setup_future_usage: savePaymentMethod && userId ? "off_session" : void 0,
    metadata: {
      userId: userId || "guest",
      customerName: customerName || "",
      shippingAddress: JSON.stringify(shippingAddress) || {},
      orderId,
      items: JSON.stringify(items)
    }
  });
  return {
    clientSecret: paymentIntent.client_secret,
    orderId
  };
});

export { process_payment_post_default as default };
//# sourceMappingURL=process-payment.post.mjs.map
