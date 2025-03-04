import { redis } from '~/server/utils/redisClient'

export default defineEventHandler(async (event) => {
  const testKey = 'nuxt-redis-test'

  // Set value in Redis
  await redis.set(testKey, 'Hello from Redis!')

  // Get value from Redis
  const value = await redis.get(testKey)

  return { message: value }
})
