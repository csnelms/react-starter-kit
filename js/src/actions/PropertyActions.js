import { GET_PROPERTY } from '../constants/actionTypes'
import Property from '../model/Property'
import { BASE_URL } from '../constants/global'
import { get } from '../services/Api'

function getMockProperty (transactionId) {
  return {
    transactionId: transactionId,
    address: {
      street: '1030 Backer Way',
      city: 'Reno',
      state: 'NV',
      zip: '89523'
    }
  }
}

export function getProperty (transactionId) {
  // you can return a simple object
  // return { type: GET_PROPERTY, payload: getMockProperty(transactionId) };

  // or an async/await function
  return async dispatch => {
    try {
      // TODO: move to more generic api so you can swap out axios for fetch or jquery or whatever
      // const property = await appApi.get(`property/${transactionId}`)
      // const axiosOptions = {
      //   params: {
      //     method: 'getTxnData',
      //     transactionId: transactionId
      //   }
      // }
      const remoteUrl = `${BASE_URL}remote/ajax/transaction/transaction.cfc?method=getTxnData&transactionId=${transactionId}` // TODO: better place for this?
      const response = await get(remoteUrl)()
      const mappedData = {
        transactionId: response.TRANSACTIONID,
        address: {
          street: response.SEARCHSTREET,
          city: response.SEARCHCITY,
          state: response.SEARCHSTATE,
          zip: response.SEARCHZIP
        }
      }
      const property = new Property(mappedData)
      dispatch({ type: GET_PROPERTY, payload: property })
    } catch (e) {
      // when developing locally, we will always enter this block due to 401 unauthorized response (Access-Control-Allow-Origin header)
      console.log(e)
      const response = await getMockProperty(transactionId)
      const property = new Property(response)
      dispatch({ type: GET_PROPERTY, payload: property })
    }
  }
}
