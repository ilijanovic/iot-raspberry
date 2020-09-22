import express from 'express'
import routes from './routes/index'
let app = express()
app.use(express.json())
app.use(routes)

export default {
  handler: app,
  path: '/api/',
}
