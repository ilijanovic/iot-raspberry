import { getTokenFromHeader, verifyToken, decode } from '../helper/token'
import { notAutorized } from '../helper/errors'

/**
 * Checks if the request is allowed to move to the next middlewareS
 *
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Execute this function to move to the next middleware
 */

export async function auth(req, res, next) {
  let token = getTokenFromHeader(req)
  if (!token) return notAutorized(res)
  if (!(await verifyToken(token))) return notAutorized(res)
  let { _id } = decode(token)
  res.locals.userId = _id
  next()
}
