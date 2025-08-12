export async function ssrFetch(url, options = {}) {
  const config = useRuntimeConfig()
  // Ensure base URL for SSR
  const baseUrl = import.meta.server ? config.public.BASE_URL : ''
  const fullUrl = baseUrl + url

  if (import.meta.server) {
    // Pass cookies for SSR
    const headers = useRequestHeaders(['cookie'])
    options.headers = {
      ...(options.headers || {}),
      cookie: headers.cookie || '',
    }
    const response = await fetch(fullUrl, options)
    return await response.json()
  } else {
    // Use $fetch on client
    return await $fetch(url, options)
  }
}
