export function userExistNot(res) {
  return res.status(400).json({
    message:
      'Benutzer existiert nicht. Bitte überprüfe deinen Namen ob er korrekt ist',
  })
}

export function userAlreadyExist(res) {
  return res.status(409).json({
    message: `Der Benutzer existiert bereits. Bitte wählen Sie einen anderen Namen aus`,
  })
}

export function passwordWrong(res) {
  return res.status(400).json({
    message: 'Passwort stimmt nicht überein',
  })
}
