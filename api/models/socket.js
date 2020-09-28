import mongoose from 'mongoose'
import { conn } from '../config/connection'
const socketSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  moduleId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
})

export default conn.model('Socket', socketSchema)
