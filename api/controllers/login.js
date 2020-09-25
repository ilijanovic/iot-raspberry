/**
 *  This is the controller for loging in
 *
 * @param {Object} req - Request Object
 * @property {String} name - The name of the user
 * @property {String | Number} password - Password of the user
 * @param {Object} res - Response Object
 */

import { userExistNot, passwordWrong, criticalError } from '../helper/errors'
import { getUserByNameSensitive, removeSensitiveData } from '../helper/user'
import bcrypt from 'bcrypt'
import { generateToken } from './token'
export async function loginHandler(req, res) {
  let { name, password } = req.body

  if (typeof name !== 'string') return userExistNot(res)

  let user = await getUserByNameSensitive(name.trim())

  if (!user) return userExistNot(res)

  let passwordEqual = await bcrypt.compare(password, user.hashedPassword)

  if (!passwordEqual) return passwordWrong(res)
  try {
    let token = await generateToken(user)
    user = removeSensitiveData(user)
    return res.status(200).json({ user, token })
  } catch (err) {
    return criticalError(res)
  }
}
