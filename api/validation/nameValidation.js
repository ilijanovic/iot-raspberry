/**
 *
 * Validates the name. Trims the name if the name is valid otherwise rejects with an error.
 * Status code 400 Bad request
 *
 * @param {String} name - The incoming name from the POST body
 * @param {Object} res - The response object
 * @returns {Promise} - Resolves formatted name back (trimmed) or Rejects with an error message
 */

export function nameValidation(name) {
  return new Promise((res, rej) => {
    if (typeof name !== 'string') {
      rej("Falscher Datentyp. Für name wird der typ 'string' ertwatet. ")
    }
    name = name.trim()
    if (hasWhiteSpace(name)) {
      rej('Name enthält leerzeichen. Bitte entfernen')
    }
    if (name.length < 4) {
      rej('Name zu kurz. Mindestens 4 zeichen werden benötigt')
    }
    res(name)
  })
}


/*
* Checks if the string has whitespaces in it
*
* @param {String} s - String that needs to be tested for whitespace
* @returns {Boolean} - Returns "true" if the string has whitespace in it otherwise "false"
*/

function hasWhiteSpace(s) {
  return /\s/g.test(s)
}
