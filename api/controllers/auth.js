import { getTokenFromHeader , verifyToken} from '../helper/token'
import {notAutorized} from "../helper/errors"

/**
 * Checks if the request is allowed to move to the next middleware
 *
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Execute this function to move to the next middleware
 */

export function auth(req, res, next) {
  let token = getTokenFromHeader(req)
  if (!token) return notAutorized(res)
  if(!await verifyToken(token)) return notAutorized(res)
  next()
}
