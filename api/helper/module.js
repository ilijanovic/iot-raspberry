import User from '../models/user'
/**
 *
 * Adds the module to the database
 *
 * @param {Object} _id - User ID (MongoDB ID)
 * @param {Object} options - Module options like "name", "dataset" etc..
 * @returns {Object} - Returns the saved module
 */

export function addModule(_id, options) {}

/**
 *
 * Gets all moduels from an user
 *
 * @param {Object} _id - User ID (MongoDB ID)
 * @returns {Promise} - Returns the modules (array)
 */

export async function getModules(_id) {
  return (await User.findOne({ _id }, { modules: 1 })).modules
}

export async function deleteModule(userId, moduleId) {
  return await User.updateOne(
    { _id: userId },
    {
      $pull: {
        modules: {
          _id: moduleId,
        },
      },
    }
  )
}
