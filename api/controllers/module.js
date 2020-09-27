import User from '../models/user'
import { isValidObjectId } from '../validation/objectId'
import { deleteModule } from '../helper/module'
import { criticalError } from '../helper/errors'
import { checkChartType } from '../validation/chart'
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
    chartType,
  } = req.body
  let { userId } = res.locals
  if (!name || !dataset || !type)
    return res.status(400).json({
      message: `Required propertie missing: ${!name}, ${!dataset}, ${!type}, ${!chartType}`,
    })

  if (!chartType(chartType))
    return res.status(400).json({ message: 'Invalid charttype' })

  let { modules } = await User.findOneAndUpdate(
    { _id: userId },
    {
      $push: {
        modules: {
          name,
          dataset,
          type,
          borderColor,
          backgroundColor,
          chartType,
          dataOptions,
        },
      },
    },
    { new: true }
  )
  let module = modules[modules.length - 1]
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
