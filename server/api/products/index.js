import { adminFirestore as db } from '~/server/utils/firebaseAdmin'

export default defineEventHandler(async (event) => {
  try {
    // const products = []
    const query = getQuery(event)

    const brands =
      query.brands?.split(',').map((brand) => brand.toLowerCase()) || []
    const priceRanges = query.priceRanges?.split(',') || []
    const storage = query.storage?.split(',') || []

    let productsRef = db.collection('products')
    let queryRef = productsRef

    if (brands.length) {
      queryRef = queryRef.where('categoryId', 'in', brands)
    }

    if (storage.length) {
      queryRef = queryRef.where('storage', 'in', storage)
    }

    if (priceRanges.length === 1) {
      const range = parsePriceRange(priceRanges[0])
      queryRef = queryRef
        .where('price', '>=', range.min)
        .where('price', '<=', range.max)
    }

    // queryRef = queryRef.orderBy('name').limit(10)
    const snapshot = await queryRef.orderBy('name').get()

    let products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))

    // console.log(products, 'products')

    // const allProducts = await db
    //   .collection('products')
    //   .orderBy('name')
    //   .limit(10)
    //   .get()

    // allProducts?.forEach((product) => {
    //   products.push({ ...product.data(), id: product.id })
    // })

    return { products }
  } catch (error) {
    console.error('Error fetching products:', error.message)

    // Return an error response
    setResponseStatus(event, 500)
    return { message: 'Failed to fetch products' }
  }
})

function parsePriceRange(label) {
  const parts = label.replace('$', '').split('-')
  const min = parseFloat(parts[0])
  const max = parts[1]?.includes('+')
    ? Infinity
    : parseFloat(parts[1]) || Infinity
  return { min, max }
}

// pagination
// export default defineEventHandler(async (event) => {
//   try {
//     const query = getQuery(event) // Extract query parameters from the request
//     const page = parseInt(query.page || '1', 10) // Default to page 1 if not provided
//     const limit = parseInt(query.limit || '10', 10) // Default to 10 items per page

//     if (page < 1 || limit < 1) {
//       setResponseStatus(event, 400)
//       return { message: 'Invalid pagination parameters' }
//     }

//     const products = []
//     let queryRef = db.collection('products').orderBy('name').limit(limit)

//     if (page > 1) {
//       const previousPageSnapshot = await db
//         .collection('products')
//         .orderBy('name')
//         .limit((page - 1) * limit)
//         .get()

//       const lastVisible = previousPageSnapshot.docs[previousPageSnapshot.docs.length - 1]
//       queryRef = queryRef.startAfter(lastVisible)
//     }

//     const paginatedProducts = await queryRef.get()

//     paginatedProducts?.forEach((product) => {
//       products.push({ ...product.data(), id: product.id })
//     })

//     return { products, page, limit }
//   } catch (error) {
//     console.error('Error fetching products:', error.message)

//     // Return an error response
//     setResponseStatus(event, 500)
//     return { message: 'Failed to fetch products' }
//   }
// })
