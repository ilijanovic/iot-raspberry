import mongoose from 'mongoose'
import { conn } from '../config/connection'
const socketSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  socketId: {
    type: mongoose.Types.ObjectId,
    required: true,
    default: mongoose.Types.ObjectId,
  },
})

export default conn.model('Socket', socketSchema)
