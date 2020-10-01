import { config } from '../config/config'

const types = ['line', 'pie']

/**
 *
 * Checks if the incoming charttype is valid
 *
 * @param {String} type - Type of the chart
 * @returns {Boolean} - Returns "true" if its valid chartType otherwise false
 */

export function checkChartType(type) {
  return types.some((chartType) => chartType === type)
}

/**
 *
 * Returns the default data for the chart
 *
 * @param {String} chartType - Type of the chart
 * @param {Object} data - Object that contains data like background color, border color etc.
 * @returns {Object} - Returns the starting data
 */

export function getDefaultOptions(
  chartType,
  { dataset, borderColor, backgroundColor }
) {
  switch (chartType) {
    case 'line':
      return {
        labels: ['Start'],
        datasets: [
          {
            label: dataset,
            backgroundColor,
            borderColor,
            data: [0],
          },
        ],
      }
    case 'pie':
      let length = dataset.length
      let arr = []
      if (length > config.pieOptionsAmount) {
        length = config.pieOptionsAmount
      }
      arr.length = length
      arr.fill(1)
      return {
        labels: [...dataset],
        datasets: [
          {
            data: [...arr],
            backgroundColor,
          },
        ],
      }
  }
}
