import User from '../models/user'

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
  console.log(module)
  return res.status(200).json(module)
}
