export default defineEventHandler(async (event) => {
  const refreshToken = getCookie(event, 'refreshToken')

  if (!refreshToken) {
    return { success: false, message: 'No refresh token found' }
  }

  try {
    // Exchange refresh token for a new ID token
    const refreshed = await fetch(
      `https://securetoken.googleapis.com/v1/token?key=${process.env.API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
        }),
      },
    ).then((res) => res.json())

    // Get new tokens
    const newIdToken = refreshed.id_token
    const newRefreshToken = refreshed.refresh_token // May or may not change

    // Store the new tokens securely
    setCookie(event, 'authToken', newIdToken, { httpOnly: true, secure: true })
    setCookie(event, 'refreshToken', newRefreshToken, {
      httpOnly: true,
      secure: true,
    })

    return { success: true, token: newIdToken }
  } catch (error) {
    return { success: false, message: 'Token refresh failed', error }
  }
})
