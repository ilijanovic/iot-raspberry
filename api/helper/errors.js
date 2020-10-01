import fs from 'fs'

/**
 * Response with an 400 error and the message that the user does not exist.
 *
 * @param {Object} - Express.js response object
 */

export function userExistNot(res) {
  return res.status(400).json({
    message:
      'Benutzer existiert nicht. Bitte überprüfe deinen Namen ob er korrekt ist',
  })
}

/**
 * Response with an 409 error and the message that the user already exist.
 *
 * @param {Object} - Express.js response object
 */

export function userAlreadyExist(res) {
  return res.status(409).json({
    message: `Der Benutzer existiert bereits. Bitte wählen Sie einen anderen Namen aus`,
  })
}

/**
 * Response with an 400 error and the message that the passwords arent equal
 *
 * @param {Object} - Express.js response object
 */

export function passwordWrong(res) {
  return res.status(400).json({
    message: 'Passwort stimmt nicht überein',
  })
}

/**
 * Response with an 500 error. Internal error
 *
 * @param {Object} - Express.js response object
 */

export function criticalError(res) {
  return res.status(500).json({
    message: 'Sorry, etwas ist schiefgelaufen',
  })
}

/**
 * Response with an 500 error. Internal error
 *
 * @param {Object} - Express.js response object
 */

export function notAutorized(res) {
  return res.status(402).json({
    message: 'Zugriff verweigert. Bitte melden Sie sich neu an',
  })
}

export function writeErrorLog(err, routeHandler) {
  let path = './error.log'
  let date = new Date()
  return new Promise((res) => {
    if (fs.existsSync(path)) {
      fs.appendFile(
        path,
        `\n ${err} | Time: ${date.toISOString()} | Appeard in:  ${routeHandler} \n`,
        res
      )
    } else {
      fs.writeFile(path, err, res)
    }
  })
}
