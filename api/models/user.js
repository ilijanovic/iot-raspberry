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
  modules: [
    {
      _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId,
      },
      name: {
        type: String,
        required: true,
      },
      dataset: {
        type: String,
        required: true,
      },
      borderColor: {
        type: String,
        default: '#bdc3c7',
      },
      backgroundColor: {
        type: String,
        default: '#34495e',
      },
      type: {
        type: String,
        required: true,
      },
    },
  ],
})

export default conn.model('User', userSchema)
