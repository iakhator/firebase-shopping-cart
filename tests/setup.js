// Simplified test setup file to fix crypto and environment issues

import { vi } from 'vitest'

// Fix crypto.hash error by polyfilling the missing function
const crypto = require('crypto')

if (!global.crypto) {
  global.crypto = crypto
}

// Add the missing hash function that Vue/Vite expects
if (!global.crypto.hash) {
  global.crypto.hash = function (algorithm, data) {
    return crypto.createHash(algorithm).update(data).digest()
  }
}

// Ensure crypto.getRandomValues exists for browser compatibility
if (!global.crypto.getRandomValues) {
  global.crypto.getRandomValues = function (array) {
    return crypto.randomFillSync(array)
  }
}

// Mock basic browser APIs that components might use
global.window = global.window || {}
global.document = global.document || {}

// Mock computed for Vue composition API
global.computed = vi.fn((fn) => ({ value: fn() }))

// Basic cleanup
import { afterEach } from 'vitest'

afterEach(() => {
  vi.clearAllMocks()
})
