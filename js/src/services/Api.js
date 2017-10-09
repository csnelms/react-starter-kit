import axios from 'axios'
import { BASE_URL, TIMEOUT } from '../constants/global'
import { serialize } from '../util/utilities'

export function request (config) {
  Object.assign(config, { timeout: TIMEOUT, withCredentials: true })
  if (config.method === 'POST') {
    config.headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
    // serialize config.data object into query string for body of request so it works with Content-Type 'application/x-www-form-urlencoded'
    config.transformRequest = [serialize]
  }
  return async () => {
    try {
      const response = await axios.request(config)
      // console.log(response)
      if (response.status === 200) {
        return response.data
      } else if (response.status === 401) {
        console.log(`You need to be logged into ${BASE_URL} for network calls`, response)
        // throw new Error(`You need to be logged into ${BASE_URL} for network calls`)
      } else {
        console.log('API get request failure', response)
        // throw new Error('API get request failure')
      }
    } catch (e) {
      console.log(`Unknown error in API, perhaps you are not logged into ${BASE_URL}`, e)
    }
  }
}
