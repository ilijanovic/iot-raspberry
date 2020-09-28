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
      type: {
        type: String,
        required: true,
      },
      chartType: {
        required: true,
        type: String,
      },
      dataOptions: {
        required: true,
        type: Object,
      },
    },
  ],
})

export default conn.model('User', userSchema)
