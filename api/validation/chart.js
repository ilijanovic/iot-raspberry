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
