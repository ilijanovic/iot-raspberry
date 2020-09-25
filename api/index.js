import express from 'express'
import routes from './routes/index'
let app = express()

/**
 * Parses the incoming request Body. Needed for POST requests
 */

app.use(express.json())
app.use(routes)

export default {
  handler: app,
  path: '/api/',
}
