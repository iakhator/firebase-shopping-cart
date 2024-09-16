import { watchEffect } from 'vue'

export function useStorage(key, defaultValue) {
  function get(key, defaultValue) {
    if (typeof window === 'undefined') {
      return defaultValue // Prevents SSR issues
    }

    const storedValue = window.localStorage.getItem(key)
    if (storedValue !== null) {
      try {
        return JSON.parse(storedValue)
      } catch (error) {
        console.error('Error parsing JSON from localStorage', error)
      }
    }

    return defaultValue
  }

  function update(key, value) {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(value))
    }
  }

  // Initial value loaded from local storage
  const initialValue = get(key, defaultValue)

  // Sync the value with local storage whenever it changes
  watchEffect(() => {
    update(key, initialValue)
  })

  return {
    get,
    update,
  }
}
