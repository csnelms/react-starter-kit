import axios from 'axios'
import { BASE_URL } from '../constants/global'

export function get (config) {
  const response = axios.get(BASE_URL + 'remote/ajax/transaction/transaction.cfc', config)
  if (response.status === 200) {
    return response
  } else {
    // TODO: handle invalid response
    return response
  }
}
