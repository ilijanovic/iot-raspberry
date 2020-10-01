import { getSocketConfig } from '../helper/socket'
import User from '../models/user'
import { config } from '../config/config'

/**
 *
 * Adds data to the chart
 *
 * @param {String} id - Socket ID
 * @param {String} chart - Type of the chart
 * @param {Object} data - Object that contains the data that will be inserted
 * @param {Object} res - Response Object
 * @returns {undefined}
 */

export async function setData(id, chart, data) {
  let config = await getSocketConfig(id)
  if (!config) {
    throw 'Could not find module associated with that ID'
  }
  let { moduleId, userId } = config
  switch (chart) {
    case 'line':
      return addDataToLineChart(userId, moduleId, data)
    case 'pie':
      return addDataToPieChart(userId, moduleId, data)
  }
}

/**
 *
 * Adds data to an line chart
 *
 * @param {Object} userId - User ID (MongoDB ID)
 * @param {Object} moduleId - Module ID (MongoDB ID)
 * @param {Object} res - Response Object
 * @param {data} data - Object that contains data
 */

export async function addDataToLineChart(
  userId,
  moduleId,
  { label = undefined, dataPoint }
) {
  if (typeof dataPoint !== 'number') {
    throw `Wronge type. 'dataPoint' must be an type of 'number'. Received: ${typeof dataPoint}`
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

/**
 *
 * Adds data to an pie Chart
 *
 * @param {Object} userId - User ID (MongoDB ID)
 * @param {Object} moduleId - Module ID (MongoDB ID)
 * @param {Object} res - Response Object
 * @param {data} data - Object that contains data
 */

export async function addDataToPieChart(
  userId,
  moduleId,
  { index, dataPoint }
) {
  if (typeof dataPoint !== 'number') {
    throw `Wronge type. 'dataPoint' must be an type of 'number'. Received: ${typeof dataPoint}`
  }
  if (typeof index !== 'number') {
    throw `Wronge type. 'index' must be an type of 'number'. Received: ${typeof index}`
  }

  if (config.pieOptionsAmount < index + 1)
    throw 'No data found at index: ' + index

  await User.updateOne(
    { _id: userId, 'modules._id': moduleId },
    {
      $set: {
        [`modules.$.dataOptions.datasets.0.data.${index}`]: dataPoint,
      },
    }
  )
}
