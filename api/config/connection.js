/**
 * Creates a new connection to the database
 */

import mongoose from 'mongoose'
export const conn = mongoose.createConnection(process.env.MONGODB_URI, {
  useNewUrlParser: true,
})
