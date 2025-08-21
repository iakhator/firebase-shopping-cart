import { d as defineEventHandler, k as readRawBody, f as adminFirestore } from '../../../nitro/nitro.mjs';
import { r as removeCartItem } from '../../../_/cartUtils.mjs';
import Stripe from 'stripe';
import { a as sendOrderConfirmation } from '../../../_/emailService.mjs';
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
import 'dayjs';
import 'fs/promises';
import 'path';
import 'fs';
import 'module';

const stripe = new Stripe(process.env.STRIPE_SECRET);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
var stripe_post_default = defineEventHandler(async (event) => {
  const sig = event.node.req.headers["stripe-signature"];
  const body = await readRawBody(event);
  let stripeEvent;
  try {
    stripeEvent = stripe.webhooks.constructEvent(body, sig, endpointSecret);
    console.log("Received event type:", stripeEvent.type);
  } catch (err) {
    console.error("Webhook error:", err.message);
    return { statusCode: 400, error: "Invalid signature" };
  }
  if (stripeEvent.type === "payment_intent.succeeded") {
    try {
      const paymentIntent = stripeEvent.data.object;
      if (!paymentIntent.metadata || !paymentIntent.metadata.items) {
        console.error("Missing metadata in payment intent:", paymentIntent);
        return { statusCode: 400, error: "Invalid metadata" };
      }
      const { userId, email, items, orderId, customerName, shippingAddress } = paymentIntent.metadata;
      const total = paymentIntent.amount / 100;
      const itemsArray = JSON.parse(items);
      const shippingAddressObj = JSON.parse(shippingAddress);
      const status = paymentIntent.status === "succeeded" ? "processing" : "";
      const paymentStatus = paymentIntent.status === "succeeded" ? "paid" : "failed";
      let paymentMethod = "Card";
      if (paymentIntent.charges && paymentIntent.charges.data && paymentIntent.charges.data.length > 0) {
        const charge = paymentIntent.charges.data[0];
        if (charge.payment_method_details && charge.payment_method_details.card) {
          const brand = charge.payment_method_details.card.brand;
          const last4 = charge.payment_method_details.card.last4;
          paymentMethod = `${brand.charAt(0).toUpperCase() + brand.slice(1)} ending in ${last4}`;
        }
      }
      await adminFirestore.collection("orders").doc(orderId).update({
        paymentStatus,
        status,
        stripePaymentIntentId: paymentIntent.id,
        paidAt: (/* @__PURE__ */ new Date()).toISOString(),
        paymentMethod
      });
      await sendOrderConfirmation({
        to: email,
        customerName,
        orderId,
        shippingAddress: shippingAddressObj,
        items: itemsArray,
        total
      });
      await removeCartItem(userId);
      return { received: true };
    } catch (error) {
      console.error("Error processing payment intent:", error);
      return { statusCode: 500, error: "Error processing payment intent" };
    }
  }
  return { received: true };
});

export { stripe_post_default as default };
//# sourceMappingURL=stripe.post.mjs.map
