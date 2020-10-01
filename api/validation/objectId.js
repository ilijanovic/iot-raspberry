import mongoose from 'mongoose'

/**
 *
 * Validates if the passed ID is an valid MongoDB ID
 *
 * @param {Object} id - MongoDB ID
 * @returns {Boolean} - Returns "true" if its an mongoDB ID otherwise "false"
 */

export function isValidObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id)
}
