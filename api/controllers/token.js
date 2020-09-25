import jwt from 'jsonwebtoken'
import { config } from '../config/config'
/**
 * Creates an JSON web token (JWT)
 *
 * @param {Object} user - User object from the Database
 * @property {String} name - Name of the user
 * @property {String} _id - User ID
 * @returns {Promise} Resolves an JWT
 */

export function generateToken(user) {
  return new Promise((res, rej) => {
    jwt.sign(
      { name: user.name, _id: user._id },
      process.env.PRIVATE_KEY,
      { algorithm: 'RS256', expiresIn: config.tokenExpiration },
      (err, token) => {
        if (err) rej('Something went wrong while generating the token')
        res(token)
      }
    )
  })
}

/**
 * Verifys the token if its still valid
 *
 * @param {String} token - JWT as an string
 * @returns {Promise} - Resolves "true" if token is valid else "false"
 */

export function verifyToken(token) {
  return new Promise((res) => {
    jwt.verify(token, process.env.PRIVATE_KEY, (err, decoded) => {
      if (err) res(false)
      res(true)
    })
  })
}

/**
 * Decodes the payload of the token
 *
 * @param {String} token - JWT as an string
 * @returns {Object} - Object with the decoded data of the token
 */

export function decode(token) {
  return jwt.decode(token)
}
