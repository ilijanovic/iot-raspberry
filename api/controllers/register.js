import { nameValidation } from '../validation/nameValidation'
import { passwordValidation } from '../validation/passwordValidation'
import { getUserByNameSensitive } from '../helper/user'
import {
  criticalError,
  userAlreadyExist,
  writeErrorLog,
} from '../helper/errors'
import User from '../models/user'

/**
 * This is the controller for registering new users.
 * Expects "name", "password" and "passwordAgain" inside of the request body
 *
 * @param {Object} req - Request Object
 * @param {Object} res - Response Object
 */

export async function registerHandler(req, res) {
  let { name, password, passwordAgain } = req.body

  try {
    name = await nameValidation(name)
  } catch (err) {
    return res.status(400).json({ message: err })
  }
  if (await getUserByNameSensitive(name)) {
    return userAlreadyExist(res)
  }
  try {
    let hashedPassword = await passwordValidation(password, passwordAgain, res)
    let user = new User({
      name,
      hashedPassword,
    })
    await user.save()
    res.status(200).json({ name, hashedPassword })
  } catch (err) {
    await writeErrorLog(err, 'registerHandler')
    return criticalError(res)
  }
}
