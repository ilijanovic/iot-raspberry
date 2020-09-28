import { checkMissingParams } from '../validation/requestParam'
import { setData } from '../helper/dataMutation'
import { criticalError } from '../helper/errors'
import { emitChartData } from '../helper/socket'
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
    emitChartData(id, data)
    return res.status(200).json({ message: 'Added new datapoint' })
  } catch (err) {
    return criticalError(res)
  }
}
