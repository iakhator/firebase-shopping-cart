import { customAlphabet } from 'nanoid'

const nanoid4 = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 4)
const nanoid3 = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 3)

export function generateOrderId() {
  const part1 = nanoid4()
  const part2 = nanoid3()
  return `ORD-${part1}-${part2}`
}
