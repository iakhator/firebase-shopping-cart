import { nanoid } from 'nanoid'

export function generateOrderId() {
  const timestamp = Date.now().toString(36)
  const random = nanoid(8)
  return `ORD-${timestamp}-${random}`.toUpperCase()
}
