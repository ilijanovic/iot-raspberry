import User from '../models/user'
import bcrypt from 'bcrypt'
/**
 *
 * Gets the user by his Mongodb object ID
 *
 * @param {Object | String} _id - MongoDB ObjectID of the user
 * @returns {Promise} - Returns null if it doesnt find any user otherwise it returns the User
 */

export function getUserById(_id) {
  return User.findOne({ _id })
}

/**
 *
 * Gets the user by his name
 *
 * @param {Object | String} _id - MongoDB ObjectID of the user
 * @returns {Promise} - Returns null if it doesnt find any user otherwise it returns the User
 */

export function getUserByName(name) {
  return User.findOne({ name })
}
