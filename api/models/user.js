import mongoose from 'mongoose'
import { conn } from '../config/connection'
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 12,
  },
  hashedPassword: {
    type: String,
    required: true,
    minlength: 8,
  },
  modules: {
    type: Array,
    default: [],
  },
})

export default conn.model('User', userSchema)
