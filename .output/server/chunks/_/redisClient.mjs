import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL || "redis://redis:6379");
redis.ping().then((result) => {
  console.log("Redis PING response:", result);
}).catch((error) => {
  console.error("Redis connection error:", error);
});
var redisClient_default = redis;

export { redisClient_default as r };
//# sourceMappingURL=redisClient.mjs.map
