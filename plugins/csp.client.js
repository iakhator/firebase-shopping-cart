export default defineNuxtPlugin(() => {
  // Find the nonce from the CSP meta tag
  const nonceMeta = document.querySelector("meta[name='csp-nonce']")
  if (nonceMeta) {
    window.CSP_NONCE = nonceMeta.getAttribute('content')
  }
})
