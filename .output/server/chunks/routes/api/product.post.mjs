import { d as defineEventHandler, f as adminFirestore, h as setResponseStatus } from '../../nitro/nitro.mjs';
import { v4 } from 'uuid';
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

var product_post_default = defineEventHandler(async (event) => {
  try {
    const productData = {
      name: "Google Pixel 9",
      bundles: [
        {
          id: v4(),
          ram: "12GB",
          price: 639.9,
          storage: "128GB"
        },
        {
          id: v4(),
          ram: "12GB",
          price: 748.45,
          storage: "256GB"
        }
      ],
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/fredl-c8ccd.appspot.com/o/products%2Fs24ultera.jpg?alt=media&token=841d0e05-f555-4736-b5f4-1e0455daa40d",
      description: 'Google Pixel 9Android Smartphone with Gemini, 24-Hour Battery, Advanced Camera, and 6.3" Actua Display',
      categoryId: "pixel",
      variant: [
        {
          color: "obsidian",
          code: "#0B0C0C",
          imageUrl: "https://firebasestorage.googleapis.com/v0/b/fredl-c8ccd.appspot.com/o/products%2Fpixel9_black.jpg?alt=media&token=17437fd6-9d79-4af3-853d-5d87490c8a88"
        },
        {
          color: "wintergreen",
          code: "#56806F",
          imageUrl: "https://firebasestorage.googleapis.com/v0/b/fredl-c8ccd.appspot.com/o/products%2Fpixel9_wintergreen.jpg?alt=media&token=2bf27388-e128-47d3-8dc6-464ad5e4341a"
        },
        {
          color: "peony",
          code: "#D94F70",
          imageUrl: "https://firebasestorage.googleapis.com/v0/b/fredl-c8ccd.appspot.com/o/products%2Fpixel9_pheony.jpg?alt=media&token=37ea9a7c-dd74-4184-b90a-9a5e4b3bdf4d"
        },
        {
          color: "porcelain",
          code: "#F8F4F0",
          imageUrl: "https://firebasestorage.googleapis.com/v0/b/fredl-c8ccd.appspot.com/o/products%2Fpixel9_porcelain.jpg?alt=media&token=d9aeee72-7e80-4419-bd87-357f27a013a0"
        }
      ],
      specification: {
        OS: "Android 14",
        Camera: "50MP main camera, 12MP ultra-wide camera",
        Battery: "5400mAh, 50W wireless charging",
        Display: "6.3 inches, 120Hz refresh rate",
        Processor: "Snapdragon",
        RAM: "12GB",
        Storage: "128GB/256GB",
        Resolution: "either `1080 x 2340` or `2160 x 1080`"
      }
    };
    const productRef = await adminFirestore.collection("products").add(productData);
    return {
      product: {
        ...productData,
        id: productRef.id
      },
      message: "Product added successfully"
    };
  } catch (error) {
    console.error("Error adding product:", error.message);
    setResponseStatus(event, 500);
    return { message: "Failed to add product" };
  }
});

export { product_post_default as default };
//# sourceMappingURL=product.post.mjs.map
