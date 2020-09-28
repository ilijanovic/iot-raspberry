import Socket from '../models/socket'

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
