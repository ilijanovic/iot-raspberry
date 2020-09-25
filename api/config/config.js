/**
 * This Object contains different configuration options
 *
 * @module
 * @property {Number} saltRounds - Number of salt rounds for hashing the password
 * @property {String | Number} tokenExpiration - Expiration time of the JWT
 */

export const config = {
  saltRounds: 10,
  tokenExpiration: '1h',
}
