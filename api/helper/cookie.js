import { config } from '../config/config'

/**
 *
 * Adds an HTTP-only cookie to the response header
 *
 * @param {Object} res - Response object
 */

export function setCookie(res, token) {
  let { cookieName, tokenExpiration } = config
  res.cookie(cookieName, token, {
    httpOnly: true,
    maxAge: tokenExpiration,
  })
}
