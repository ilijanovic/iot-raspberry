import Socket from '../models/socket'
import { io } from '../index'
/**
 *
 * Saves an document to the "Socket" collection
 *
 * @param {Object} moduleId -  ID of the module (MongoDB ID)
 * @param {Object} userId - ID of the user (MongoDB ID)
 * @returns {Promise} - Resolves the saved socketID object
 */

export async function addSocketId(moduleId, userId) {
  let socketModel = new Socket({
    userId,
    moduleId,
  })
  return await socketModel.save()
}

/**
 *
 * Returns socket config
 *
 * @param {Object | String} _id - Socket ID
 * @returns {Object} - Object that contains user ID and Module ID
 */

export function getSocketConfig(_id) {
  return Socket.findOne({ _id })
}

/**
 *
 * @param {String} id - Socket ID
 * @param {String} type - Type of the chart
 * @param {Object} data - Contains data that is being emited
 */

export function emitChartData(id, type, data) {
  data['type'] = type
  io.emit(id, data)
}

/**
 *
 * Deletes Socket ID
 *
 * @param {String | Object} moduleId - Module ID
 */

export function deleteSocketId(moduleId) {
  return Socket.deleteOne({ moduleId })
}
