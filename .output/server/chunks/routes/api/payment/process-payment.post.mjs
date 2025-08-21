import { d as defineEventHandler, e as readBody, f as adminFirestore, c as createError } from '../../../nitro/nitro.mjs';
import Stripe from 'stripe';
import { customAlphabet } from 'nanoid';
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
import 'ioredis';

const nanoid4 = customAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 4);
const nanoid3 = customAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 3);
function generateOrderId() {
  const part1 = nanoid4();
  const part2 = nanoid3();
  return `ORD-${part1}-${part2}`;
}

const stripe = new Stripe(process.env.STRIPE_SECRET);
var process_payment_post_default = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const {
    amount,
    items,
    userId,
    email,
    phone,
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
        const customer = await stripe.customers.create({
          name: userDoc.data().displayName,
          email: userDoc.data().email
        });
        await adminFirestore.collection("users").doc(userId).set(
          {
            stripeCustomerId: customer.id
          },
          { merge: true }
        );
        customerId = customer.id;
      }
      await adminFirestore.collection("users").doc(userId).set(
        {
          shippingAddress
        },
        { merge: true }
      );
    } catch (err) {
      console.error("Error verifying user:", err);
      throw createError({ statusCode: 401, message: "Unauthenticated" });
    }
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
      email: email || "",
      customerName: customerName || "",
      shippingAddress: JSON.stringify(shippingAddress) || {},
      orderId,
      items: JSON.stringify(items)
    }
  });
  if (paymentIntent.client_secret) {
    const orderDate = /* @__PURE__ */ new Date();
    const estimatedDelivery = new Date(
      orderDate.getTime() + 21 * 24 * 60 * 60 * 1e3
    );
    await adminFirestore.collection("orders").doc(orderId).set({
      items,
      orderId,
      currency,
      shippingAddress,
      userId: userId || "guest",
      amount: formattedAmount,
      paymentStatus: "pending",
      createdAt: orderDate.toISOString(),
      customer: {
        name: customerName || "",
        email: email || "",
        phone: phone || ""
      },
      estimatedDelivery: estimatedDelivery.toISOString()
    });
  }
  return {
    clientSecret: paymentIntent.client_secret,
    orderId
  };
});

export { process_payment_post_default as default };
//# sourceMappingURL=process-payment.post.mjs.map
