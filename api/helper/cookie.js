import { config } from '../config/config'

/**
 *
 * Adds an HTTP-only cookie to the response header
 *
 * @param {Object} res - Response object
 * @param {String} token - JSON web token
 * @param {Number | null} expiration - Sets the expiration time manually
 */

export function setCookie(res, token, expiration = null) {
  let { cookieName, tokenExpiration } = config
  res.cookie(cookieName, token, {
    httpOnly: true,
    maxAge: expiration === null ? tokenExpiration : expiration,
  })
}

/**
 *
 * Extracts the token out of the cookie in the header if available
 *
 * @param {Object} req - Request Object
 */

export function getTokenFromCookie(req) {
  let { cookieName } = config
  let cookieString = req.headers.cookie
  if (!cookieString) return false
  let keyValueEntrie = cookieString
    .split(';')
    .map((keyValue) => keyValue.split('=').map((val) => val.trim()))
    .find(([name]) => name === cookieName)
  if (!keyValueEntrie) return false
  return keyValueEntrie[1]
}
