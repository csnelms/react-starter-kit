import $ from 'jquery'

// convert data object into serialized query string for body of http POST request to use with Content-Type 'application/x-www-form-urlencoded'
export function serialize (data) {
  return $.param(data)
}
