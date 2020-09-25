import User from '../models/user'
/**
 *
 * Gets the user by his Mongodb object ID
 * Sensitive data is shown in the response for exapmle: password hash
 *
 * @param {Object | String} _id - MongoDB ObjectID of the user
 * @returns {Promise} - Returns null if it doesnt find any user otherwise it returns the User
 */

export function getUserByIdSensitive(_id) {
  return User.findOne({ _id }).lean()
}

/**
 *
 * Gets the user by his name
 * Sensitive data is shown in the response for example: password hash
 *
 * @param {Object | String} _id - MongoDB ObjectID of the user
 * @returns {Promise} - Returns null if it doesnt find any user otherwise it returns the User
 */

export function getUserByNameSensitive(name) {
  return User.findOne({ name }).lean()
}

/**
 *
 * Removes sensitive data from the object.
 * Removes hashed passwort from the object
 *
 * @param {Object} user - User object from the database
 * @returns {Object} - returns user object with deleted sensitive data
 */

export function removeSensitiveData(user) {
  delete user.hashedPassword
  return user
}

/**
 *
 * Gets the user by his Mongodb object ID
 *
 * @param {Object | String} _id - MongoDB ObjectID of the user
 * @returns {Promise} - Returns null if it doesnt find any user otherwise it returns the User
 */

export function getUserById(_id) {
  return User.findOne({ _id }, { _id: 1, name: 1, modules: 1 })
}
