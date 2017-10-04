import { GET_PROPERTY, GET_SOLICIT_QUEUE } from '../constants/actionTypes'
import Property from '../model/Property'
import { BASE_URL } from '../constants/global'
import { get } from '../services/Api'

export function getProperty (transactionId) {
  // you can return a simple object
  // return { type: GET_PROPERTY, payload: getMockProperty(transactionId) };

  // or an async/await function
  return async dispatch => {
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
    if (data) {
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
    } else {
      // TODO: handle no data returned
    }
  }
}

export function getQueuedOffices (transactionId) {
  // you can return a simple object
  // return { type: GET_PROPERTY, payload: getMockProperty(transactionId) };

  // or an async/await function
  return async dispatch => {
    const config = {
      url: `${BASE_URL}remote/ajax/solicitations/solicitationsQueue.cfc`,
      method: 'GET',
      params: {
        method: 'getQueuedOffices',
        transactionId: transactionId,
        allowLocalhost: true
      }
    }
    const data = await get(config)()
    if (data) {
      dispatch({ type: GET_SOLICIT_QUEUE, payload: data })
    } else {
      // TODO: handle no data returned
    }
  }
}
