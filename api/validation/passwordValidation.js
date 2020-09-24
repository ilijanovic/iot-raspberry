/**
 *
 * Validates the name. Trims the name if the name is valid otherwise response with an error.
 * Status code 400 Bad request
 *
 * @param {String} password - The incoming password from the POST body
 * @param {String} passwordAgain - The incoming password from the POST body. It should be the same like password
 * @returns {Promise} - Returns an resolved hashed password or if its reject it returns the error message
 */

import bcrypt from 'bcrypt'
import config from '../config/config'
let { saltRounds } = config
export function passwordValidation(password, passwordAgain) {
  return new Promise((resolve, rej) => {
    if (typeof password !== 'string' && typeof password !== 'number')
      rej('Datentyp stimmt nicht überein.')

    password = password.toString().trim()
    passwordAgain = passwordAgain.toString().trim()
    if (password !== passwordAgain) rej('Passwörter stimmen nicht überein')
    if (password.length < 8) rej('Password zu kurz. Minimum länge: 8')
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) rej('Opps.. es ist etwas schief gelaufen')
      resolve(hash)
    })
  })
}
