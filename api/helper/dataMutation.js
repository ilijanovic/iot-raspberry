import { getSocketConfig } from '../helper/socket'
import User from '../models/user'
export async function setData(id, chart, data) {
  let config = await getSocketConfig(id)
  if (!config) {
    return res
      .status(400)
      .json({ message: 'Could not find module associated with that ID' })
  }
  let { moduleId, userId } = config
  switch (chart) {
    case 'line':
      return addDataToLineChart(userId, moduleId, data)
  }
}

export async function addDataToLineChart(
  userId,
  moduleId,
  { label = undefined, dataPoint }
) {
  if (typeof dataPoint !== 'number') {
    return res
      .status(400)
      .json({ message: "Wronge type. 'dataPoint' must be an type of 'number'" })
  }

  await User.updateOne(
    { _id: userId, 'modules._id': moduleId },
    {
      $push: {
        'modules.$.dataOptions.datasets.0.data': dataPoint,
        'modules.$.dataOptions.labels': label,
      },
    }
  )
}
