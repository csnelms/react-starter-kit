import axios from 'axios'
import { BASE_URL, TIMEOUT } from '../constants/global'
import { serialize } from '../util/utilities'

export function request (config) {
  Object.assign(config, { timeout: TIMEOUT, withCredentials: true })
  // serialize data into
  if (config.data) {
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
      console.log('Unknown error in API', e)
    }
  }
}

// export function transformRequest (data) {
//   console.log('request', data)
//   return data
// }
