import express from 'express'
import postRoutes from './routes/post'
import getRoutes from './routes/get'
import cookieParser from 'cookie-parser'
let app = express()

/**
 * Parses the incoming request Body. Needed for POST requests
 */
app.use(cookieParser())
app.use(express.json())
app.use(postRoutes)
app.use(getRoutes)

export default {
  handler: app,
  path: '/api/',
}
