import { isValidObjectId } from '../validation/objectId'
import { deleteModule, addModule, addSocketIdToModule } from '../helper/module'
import { criticalError } from '../helper/errors'
import { checkChartType, getDefaultOptions } from '../validation/chart'
import { addSocketId } from '../helper/socket'
import {checkMissingParams} from "../validation/requestParam"
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
    borderColor = '#bdc3c7',
    backgroundColor = '#34495e',
    chartType,
  } = req.body
  let { userId } = res.locals
  if (!name || !dataset || !chartType || !type)
  let missingParams = checkMissingParams(name, dataset, type, chartType)
  if(missingParams){
    return res.status(400).json({
      message: missingParams,
    })
  }  


  if (!checkChartType(chartType))
    return res.status(400).json({ message: 'Invalid charttype' })

  let dataOptions = getDefaultOptions(chartType, {
    borderColor,
    backgroundColor,
    dataset,
  })

  let { modules } = await addModule(userId, {
    name,
    type,
    chartType,
    dataOptions,
  })

  let module = modules[modules.length - 1]

  let { _id } = module
  let socketId = (await addSocketId(_id, userId))._id
  await addSocketIdToModule(socketId, userId, _id)
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
