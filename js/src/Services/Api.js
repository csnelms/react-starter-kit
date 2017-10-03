import axios from 'axios'
import { BASE_URL, TIMEOUT } from '../constants/global'

export function get (config) {
  Object.assign(config, { method: 'GET', timeout: TIMEOUT, withCredentials: true })
  return async () => {
    try {
      const response = await axios.request(config)
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

// TODO: get a post working
