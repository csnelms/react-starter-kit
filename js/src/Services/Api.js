import axios from 'axios'
import { TIMEOUT } from '../constants/global'

export function get (config) {
  return async () => {
    Object.assign(config, { method: 'GET', timeout: TIMEOUT, withCredentials: true })
    const response = await axios.request(config)
    if (response.status === 200) {
      return response.data
    } else {
      console.log(response)
      throw new Error('API get request failure')
    }
  }
}

// TODO: get a post working
