import { checkMissingParams } from '../validation/requestParam'

export function setDataHandler(req, res) {
  let { id, label, data, chart } = req.body

  let missingParams = checkMissingParams({ id, label, data, chart })
  if (missingParams) {
    return res.json(400).json({
      message: missingParams,
    })
  }
}
