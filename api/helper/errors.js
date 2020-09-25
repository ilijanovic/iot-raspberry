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
