/**
 *
 * Validates the name. Trims the name if the name is valid otherwise response with an error.
 * Status code 400 Bad request
 *
 * @param {String} name - The incoming name from the POST body
 * @param {Object} res - The response object
 * @returns {String} - Returns formatted name back (trimmed)
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

function hasWhiteSpace(s) {
  return /\s/g.test(s)
}
