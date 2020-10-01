import { checkMissingParams } from '../validation/requestParam'
import { setData } from '../helper/dataMutation'
import { criticalError, writeErrorLog } from '../helper/errors'
import { emitChartData } from '../helper/socket'

/**
 *
 * Handler that adds new data to an chart
 *
 * @param {Object} req - Request Object
 * @param {Object} res -  Response Object
 */

export async function setDataHandler(req, res) {
  let { id, data, chart } = req.body
  let missingParams = checkMissingParams({ id, data, chart })
  if (missingParams) {
    return res.json(400).json({
      message: missingParams,
    })
  }
  try {
    await setData(id, chart, data)
    emitChartData(id, chart, data)
    return res.status(200).json({ message: 'Added new datapoint' })
  } catch (err) {
    return res.status(400).json({ message: err })
  }
}
