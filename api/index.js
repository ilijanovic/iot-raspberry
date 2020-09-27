import express from 'express'
import postRoutes from './routes/post'
import getRoutes from './routes/get'
import cookieParser from 'cookie-parser'
import redis from 'redis'

let client = redis.createClient({
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: process.env.REDIS_PORT || 6379,
})
client.on('error', (err) => {
  console.log(err)
})

let app = express()

/**
 * Parses the incoming request Body. Needed for POST requests
 */
app.use(cookieParser())
app.use(express.json())
app.use(postRoutes)
app.use(getRoutes)

export const redisClient = client
export default {
  handler: app,
  path: '/api/',
}
