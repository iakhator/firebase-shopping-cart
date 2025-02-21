// import { auth } from '../config/firebaseConfig.js'
import { adminAuth } from '~/server/utils/firebaseAdmin'
// export default defineEventHandler(async (event) => {
//   try {
//     const req = event.node.req

//     let idToken
//     if (
//       req.headers.authorization &&
//       req.headers.authorization.startsWith('Bearer ')
//     ) {
//       idToken = req.headers.authorization.split('Bearer ')[1]
//     } else {
//       setResponseStatus(event, 403)
//       return { error: 'Unauthorized' }
//     }

//     const decodedToken = await auth.verifyIdToken(idToken)

//     // Attach the UID to the request object for further use
//     req.uid = decodedToken.uid
//     return {
//       message: 'Token is valid',
//       user: {
//         displayName: decodedToken.name,
//         id: decodedToken.uid,
//         email: decodedToken.email,
//         picture: decodedToken.picture,
//       },
//     }
//   } catch (err) {
//     if (err.code === 'auth/id-token-expired') {
//       setResponseStatus(event, 403)
//       return { error: 'Token has expired.' }
//     }
//     setResponseStatus(event, 403)
//     return { error: err.code || 'Authentication failed.' }
//   }
// })

export default defineEventHandler(async (event) => {
  const session = getCookie(event, 'session')
  if (!session) return { authenticated: false }

  try {
    const decoded = await adminAuth.verifySessionCookie(session, true)
    return { authenticated: true, user: decoded }
  } catch (error) {
    deleteCookie(event, 'session')
    return { authenticated: false }
  }
})
