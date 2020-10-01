/**
 * This Object contains different configuration options
 *
 * @module
 * @property {Number} saltRounds - Number of salt rounds for hashing the password
 * @property {String | Number} tokenExpiration - Expiration time of the JWT
 * @property {String} cookieName - Set the name of the cookie that will hold the token
 * @property {Number} pieOptionsAmount - Sets the maximum amount of datapoints for the "pie" chart
 */

export const config = {
  saltRounds: 10,
  tokenExpiration: 3600000, //  1h
  cookieName: 'iot',
  pieOptionsAmount: 5,
}
