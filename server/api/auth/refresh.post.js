export default defineEventHandler(async (event) => {
  const refreshToken = getCookie(event, 'refresh_token')

  if (!refreshToken) {
    return { success: false, message: 'No refresh token found' }
  }

  try {
    // Exchange refresh token for a new ID token
    const response = await $fetch(
      `https://securetoken.googleapis.com/v1/token?key=${process.env.API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
        }),
      },
    )

    const refreshed = await response.json()

    // Check for errors in the response
    if (!response.ok) {
      const errorMessage = refreshed.error?.message || 'Unknown error'
      if (errorMessage === 'INVALID_GRANT') {
        return {
          success: false,
          message: 'Refresh token is invalid or expired',
        }
      }
      return {
        success: false,
        message: `Token refresh failed: ${errorMessage}`,
      }
    }

    // Get new tokens
    const newIdToken = refreshed.id_token
    const newRefreshToken = refreshed.refresh_token // May or may not change

    // Store the new tokens securely
    setCookie(event, 'auth_token', newIdToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 3600,
      path: '/',
    })

    // TODO: update refresh token
    // setCookie(event, 'refreshToken', newRefreshToken, {
    //   httpOnly: true,
    //   secure: true,
    // })

    return { success: true, token: newIdToken }
  } catch (error) {
    deleteCookie(event, 'auth_token')
    deleteCookie(event, 'refresh_token')
    return { success: false, message: 'Token refresh failed', error }
  }
})
