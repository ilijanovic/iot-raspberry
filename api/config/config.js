/**
 * This Object contains different configuration options
 *
 * @module
 * @property {Number} saltRounds - Number of salt rounds for hashing the password
 * @property {String | Number} tokenExpiration - Expiration time of the JWT
 * @property {String} cookieName - Set the name of the cookie that will hold the token
 */

export const config = {
  saltRounds: 10,
  tokenExpiration: 3600000, // = 1h
  cookieName: 'iot',
}
