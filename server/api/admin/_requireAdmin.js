/**
 * Reusable middleware for Nuxt server API endpoints to protect admin routes.
 * Usage:
 *   import requireAdmin from './_requireAdmin'
 *   export default defineEventHandler(requireAdmin(async (event) => {
 *     // Your admin logic here
 *   }))
 */

import { adminAuth } from '~/server/utils/firebaseAdmin'

export default function requireAdmin(handler) {
  return async (event) => {
    // Get ID token from Authorization header (Bearer token) or cookie
    let idToken =
      event.req.headers.authorization?.replace('Bearer ', '') ||
      getCookie(event, 'auth_token')

    if (!idToken) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized: No token provided',
      })
    }

    let decodedToken
    try {
      decodedToken = await adminAuth.verifyIdToken(idToken)
    } catch (err) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized: Invalid token',
      })
    }

    // Check for admin role in custom claims
    if (decodedToken.role !== 'admin') {
      throw createError({
        statusCode: 403,
        statusMessage: 'Forbidden: Admins only',
      })
    }

    // Attach user info to event for downstream handlers
    event.context = event.context || {}
    event.context.user = decodedToken

    // Proceed to actual handler
    return await handler(event)
  }
}

// Helper to get cookie value by name
function getCookie(event, name) {
  const cookieHeader = event.req.headers.cookie
  if (!cookieHeader) return undefined
  const cookies = Object.fromEntries(
    cookieHeader.split(';').map((c) => {
      const [k, v] = c.trim().split('=')
      return [k, decodeURIComponent(v)]
    })
  )
  return cookies[name]
}
