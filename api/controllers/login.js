import { writeErrorLog } from '../helper/errors'

/**
 *  This is the controller for loging in
 *  Expects "name" and "password" inside the request body
 *
 * @param {Object} req - Request Object
 * @param {Object} res - Response Object
 */

import { userExistNot, passwordWrong, criticalError } from '../helper/errors'
import { getUserByNameSensitive, removeSensitiveData } from '../helper/user'
import { setCookie } from '../helper/cookie'
import bcrypt from 'bcrypt'
import { generateToken } from '../helper/token'
export async function loginHandler(req, res) {
  let { name, password } = req.body

  if (typeof name !== 'string') return userExistNot(res)
  try {
    let user = await getUserByNameSensitive(name.trim())

    if (!user) return userExistNot(res)

    let passwordEqual = await bcrypt.compare(password, user.hashedPassword)

    if (!passwordEqual) return passwordWrong(res)

    let token = await generateToken(user)
    user = removeSensitiveData(user)
    setCookie(res, token)
    return res.status(200).json({ user, token })
  } catch (err) {
    await writeErrorLog(err, 'loginHandler')
    return criticalError(res)
  }
}
