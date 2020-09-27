import { setCookie } from '../helper/cookie'

/**
 * Loggs the user out of the system
 * Erases all cookies
 * Sets token to an blacklist
 *
 * @param {Object} req - Request Object
 * @param {Object} res - Response Object
 */

export function logoutHandler(req, res) {
  let { token } = res.locals

  setCookie(res, token, 0)
  return res.status(200).json({ message: 'Sie sind nun ausgeloggt' })
}
