import $ from 'jquery'

// convert data object into serialized query string for body of POST request to use with Content-Type 'application/x-www-form-urlencoded'
// same thing we did in httpProviderOverride for our angular application POST requests
export function serialize (data) {
  return $.param(data)
}
