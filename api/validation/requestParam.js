export function checkMissingParams({ ...params }) {
  if (Object.values(params).some((val) => val === undefined || val === null)) {
    return JSON.stringify(params, (key, value) => {
      if (value === undefined || null) {
        return 'Missing'
      }
      return value
    })
  }
  return false
}
