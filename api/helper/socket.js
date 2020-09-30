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

export function getSocketConfig(_id) {
  return Socket.findOne({ _id })
}

export function emitChartData(id, type, data) {
  data['type'] = type
  io.emit(id, data)
}

export function deleteSocketId(moduleId) {
  return Socket.deleteOne({ moduleId })
}
