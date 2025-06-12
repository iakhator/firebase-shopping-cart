import Redis from 'ioredis'

const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379')

redis
  .ping()
  .then((result) => {
    console.log('Redis PING response:', result) // Should log 'PONG'
  })
  .catch((error) => {
    console.error('Redis connection error:', error)
  })

export default redis
