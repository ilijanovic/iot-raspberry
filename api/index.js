import express from 'express'
import postRoutes from './routes/post'
import getRoutes from './routes/get'
import cookieParser from 'cookie-parser'
import _http from 'http'
import moduleRoutes from './routes/module/post'
import ioMethod from 'socket.io'

let app = express()
const _io = ioMethod(4000)
/**
 * Parses the incoming request Body. Needed for POST requests
 */
app.use(cookieParser())
app.use(express.json())
app.use(postRoutes)
app.use(getRoutes)
app.use('/module', moduleRoutes)

export const handler = app
export const path = '/api/'
export const io = _io
