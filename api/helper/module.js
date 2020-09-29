import User from '../models/user'
/**
 *
 * Adds the module to the database
 *
 * @param {Object} _id - User ID (MongoDB ID)
 * @param {Object} options - Module options like "name", "dataset" etc..
 * @returns {Object} - Returns the saved module
 */

export function addModule(_id, { name, type, chartType, dataOptions }) {
  return User.findOneAndUpdate(
    { _id },
    {
      $push: {
        modules: {
          name,
          type,
          chartType,
          dataOptions,
        },
      },
    },
    { new: true }
  )
}

/**
 *
 * Gets all moduels from an user
 *
 * @param {Object} _id - User ID (MongoDB ID)
 * @returns {Promise} - Returns the modules (array)
 */

export async function getModules(_id) {
  let modules = (await User.findOne({ _id }, { modules: 1 }).lean()).modules
  modules.forEach((module) => {
    if (module.chartType == 'line') {
      module.dataOptions.labels = module.dataOptions.labels.slice(-10)
      module.dataOptions.datasets[0].data = module.dataOptions.datasets[0].data.slice(
        -10
      )
    }
  })

  return modules
}

/**
 *
 * Deletes an Module
 *
 * @param {Object} userId - ID of the user (MongoDB ID)
 * @param {Object} moduleId - ID of the module (MongoDB ID)
 * @returns {Promise} - Returns the new User object
 */

export function deleteModule(userId, moduleId) {
  return User.findOneAndUpdate(
    { _id: userId },
    {
      $pull: {
        modules: {
          _id: moduleId,
        },
      },
    },
    { new: true }
  )
}

/**
 *
 * Adds an socketID to an Module
 *
 * @param {Object} socketId - Socket ID (mongoDB ID)
 * @param {Object} userId - User ID (mongoDB ID)
 * @param {Object} moduleId - Module ID (mongoDB ID)
 */

export async function addSocketIdToModule(socketId, userId, moduleId) {
  let { modules } = await User.findOneAndUpdate(
    { _id: userId, 'modules._id': moduleId },
    {
      $set: {
        'modules.$.socketId': socketId,
      },
    },
    { new: true }
  )
  return modules[modules.length - 1]
}
