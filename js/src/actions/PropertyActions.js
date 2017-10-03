import { GET_PROPERTY } from '../constants/actionTypes'
import Property from '../model/Property'
import { BASE_URL } from '../constants/global'
import { get } from '../services/Api'

export function getProperty (transactionId) {
  // you can return a simple object
  // return { type: GET_PROPERTY, payload: getMockProperty(transactionId) };

  // or an async/await function
  return async dispatch => {
    try {
      const config = {
        url: `${BASE_URL}remote/ajax/transaction/transaction.cfc`,
        method: 'GET',
        params: {
          method: 'getTxnData',
          transactionId: transactionId,
          allowLocalhost: true
        }
      }
      const data = await get(config)()
      const mappedData = {
        transactionId: data.TRANSACTIONID,
        address: {
          street: data.SEARCHSTREET,
          city: data.SEARCHCITY,
          state: data.SEARCHSTATE,
          zip: data.SEARCHZIP.toString()
        }
      }
      const property = new Property(mappedData)
      dispatch({ type: GET_PROPERTY, payload: property })
    } catch (e) {
      console.log(e)
    }
  }
}
