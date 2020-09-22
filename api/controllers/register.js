import { nameValidation } from '../validation/nameValidation'
import { passwordValidation } from '../validation/passwordValidation'
import User from '../models/user'
export async function registerHandler(req, res) {
  let { name, password, passwordAgain } = req.body

  name = nameValidation(name, res)
  try {
    let hashedPassword = await passwordValidation(password, passwordAgain, res)
    let user = new User({
      name,
      hashedPassword,
    })
    await user.save()
    res.status(200).json({ name, hashedPassword })
  } catch (err) {
    res.status(400).json({ message: err })
  }
}
