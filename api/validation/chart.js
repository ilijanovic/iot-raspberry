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
  { dataset, borderColor = '#bdc3c7', backgroundColor = '#34495e' }
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
      return {
        labels: [dataset],
        datasets: [
          {
            data: [],
            backgroundColor,
          },
        ],
      }
  }
}
