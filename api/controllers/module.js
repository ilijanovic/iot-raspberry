import User from '../models/user'
import { isValidObjectId } from '../validation/objectId'
import { deleteModule } from '../helper/module'
import { criticalError } from '../helper/errors'
/**
 *
 * Adds new module to an user
 * Expects "name", "dataset" and "type" inside the request body
 *
 * @param {Object} req - Request Object
 * @param {Object} res -  Response Object
 */

export async function addModuleHandler(req, res) {
  let {
    name,
    dataset,
    type,
    borderColor = null,
    backgroundColor = null,
  } = req.body
  let { userId } = res.locals
  if (!name || !dataset || !type)
    return res.status(400).json({
      message: `Required propertie missing: ${!!name}, ${!!dataset}, ${!!type}`,
    })

  let module = await User.findOneAndUpdate(
    { _id: userId },
    {
      $push: {
        modules: { name, dataset, type, borderColor, backgroundColor },
      },
    }
  )
  return res.status(200).json(module)
}

export async function deleteModuleHandler(req, res) {
  let { userId } = res.locals
  let { moduleId } = req.body
  if (!moduleId) return res.status(400).json({ message: 'Missing credentials' })
  if (!isValidObjectId(moduleId))
    return res.status(400).json({ message: 'ID is not valid ObjectId' })

  try {
    await deleteModule(userId, moduleId)
    return res.status(200).json({ message: 'Module successfully deleted' })
  } catch (err) {
    return criticalError(res)
  }
}
