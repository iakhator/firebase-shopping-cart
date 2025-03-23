import { adminFirestore as db } from '~/server/utils/firebaseAdmin'
import { v4 as uuidv4 } from 'uuid'

export default defineEventHandler(async (event) => {
  try {
    // Get product data from the request body
    const productData = {
      name: 'SAMSUNG Galaxy S25 Ultra',
      bundles: [
        {
          id: uuidv4(),
          ram: '12GB',
          price: 1081.99,
          storage: '126GB',
        },
        {
          id: uuidv4(),
          ram: '12GB',
          price: 1129.99,
          storage: '512GB',
        },
      ],
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/fredl-c8ccd.appspot.com/o/products%2Fs24ultera.jpg?alt=media&token=841d0e05-f555-4736-b5f4-1e0455daa40d',
      description:
        'OnePlus 12,16GB RAM+512GB,Dual-SIM,Unlocked Android Smartphone,Supports 50W Wireless Charging,Latest Mobile Processor,Advanced Hasselblad Camera,5400 mAh battery,2024',
      categoryId: 'oneplus',
      variant: [
        {
          color: 'Titanium',
          imageUrl:
            'https://firebasestorage.googleapis.com/v0/b/fredl-c8ccd.appspot.com/o/products%2Fs24ultera.jpg?alt=media&token=841d0e05-f555-4736-b5f4-1e0455daa40d',
        },
        {
          color: 'navy',
          imageUrl:
            'https://firebasestorage.googleapis.com/v0/b/fredl-c8ccd.appspot.com/o/products%2Fs24_navy.jpg?alt=media&token=1232ae73-1780-4a32-8be2-4f1e0371b1aa',
        },
        {
          color: 'black',
          imageUrl:
            'https://firebasestorage.googleapis.com/v0/b/fredl-c8ccd.appspot.com/o/products%2Fs24_black.jpg?alt=media&token=39d7e82f-56f6-48e4-b72d-e8f36db83aca',
        },
        {
          color: 'icyblue',
          imageUrl:
            'https://firebasestorage.googleapis.com/v0/b/fredl-c8ccd.appspot.com/o/products%2Fs24_icy.jpg?alt=media&token=2d3beb17-3d28-40c8-b7e6-c4b9e32959cf',
        },
        {
          color: 'mint',
          imageUrl:
            'https://firebasestorage.googleapis.com/v0/b/fredl-c8ccd.appspot.com/o/products%2Fs24_mint.jpg?alt=media&token=d0eb3411-0e08-41b9-a4df-a971b7c1b6aa',
        },
      ],
      specification: {
        OS: 'One UI 7, Android 15',
        Camera: '50MP main camera, 12MP ultra-wide camera',
        Battery: '5400mAh, 50W wireless charging',
        Display: '6.7 inches, 120Hz refresh rate',
        Processor: 'Snapdragon',
        RAM: '12GB',
        Storage: '256GB/512GB',
        Resolution: '2960 x 1440',
      },
    }

    // Add the product to Firestore
    const productRef = await db.collection('products').add(productData)

    // Return the newly created product with its ID
    return {
      product: {
        ...productData,
        id: productRef.id,
      },
      message: 'Product added successfully',
    }
  } catch (error) {
    console.error('Error adding product:', error.message)

    // Return an error response
    setResponseStatus(event, 500)
    return { message: 'Failed to add product' }
  }
})
