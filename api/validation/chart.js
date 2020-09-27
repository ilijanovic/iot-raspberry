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
