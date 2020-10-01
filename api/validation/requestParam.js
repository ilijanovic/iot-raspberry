/**
 *
 * Checks every param if it contains undefined or null and returns stringified response
 *
 * @param {Object} - Params that are being checked
 * @returns {String} - Returns stringified text witch params are missing
 */

export function checkMissingParams({ ...params }) {
  if (Object.values(params).some((val) => val === undefined || val === null)) {
    return JSON.stringify(params, (key, value) => {
      if (value === undefined || null) {
        return 'Missing'
      }
      return value
    })
  }
  return false
}
