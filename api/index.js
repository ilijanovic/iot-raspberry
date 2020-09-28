import express from 'express'
import postRoutes from './routes/post'
import getRoutes from './routes/get'
import cookieParser from 'cookie-parser'
import socketio from 'socket.io'
import moduleRoutes from './routes/module/post'
import http from 'http'

let app = express()

let server = http.createServer(app)

let _io = socketio(server)

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
