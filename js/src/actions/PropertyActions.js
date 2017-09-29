import axios from 'axios';
import {GET_PROPERTY} from '../constants/actionTypes';
import {BASE_URL} from '../constants/global';

function getMockProperty(propertyId) {
  return {
    id: propertyId,
    servicerId: 12345,
    loanNumber: 'CSN938475629473119',
    image: 'https://static.pexels.com/photos/32870/pexels-photo.jpg',
    address: {
      street: '1030 Backer Way',
      unitNumber: '',
      city: 'Reno',
      state: 'NV',
      zipcode: '89523',
      county: 'WASHOE',
      country: 'US',
      sourceId: -1,
      sourceName: 'sourceName'
    },
    lat: '39.519304',
    lng: '-119.877915',
    parcelApn: 'parcelApn',
    geocodeType: 'FRONT_DOOR',
    geocoderSourceId: -1,
    geocoderSourceName: 'COLLATERAL_ANALYTICS',
    neighborhood: 'neighborhood',
    taxID: -1,
    updateId: -1,
    history: [
      { status: 'Appraiser', value: 1348000, created: new Date('09/01/2017 10:29 AM').getTime(), lastStatus: new Date('09/21/2017').getTime() },
      { status: 'Completed', value: 1300000, created: new Date('02/10/2016 1:12 PM').getTime(), lastStatus: new Date('02/22/2016').getTime() },
      { status: 'Completed', value: 1290000, created: new Date('07/28/2016 8:19 AM').getTime(), lastStatus: new Date('08/12/2016').getTime() },
      { status: 'Completed', value: 1362000, created: new Date('01/12/2016 11:48 AM').getTime(), lastStatus: new Date('02/08/2016').getTime() }
    ],
    characteristics: {
      beds: 6,
      baths: 4,
      grossLivingArea: 4936,
      lotSize: 0.48,
      yearBuilt: 2004,
      propertyType: 'SFR'
    }
  };
}

export function getProperty (propertyId) {
  // you can return a simple object
  // return { type: GET_PROPERTY, payload: getMockProperty(propertyId) };

  // or an async/await function
  return async dispatch => {
    try {
      // TODO: move to more generic api so you can swap out axios for fetch or jquery or whatever
      // const property = await appApi.get(`property/${propertyId}`)
      const config = {
        params: {
            method: 'getQueuedOffices', //TODO: change to a getProperty method
            transactionId: propertyId
        }
      };
      const response = await axios.get(BASE_URL+'remote/ajax/solicitations/solicitationsQueue.cfc', config);
      if (response.status === 200) {
        dispatch({ type: GET_PROPERTY, payload: response.data });
      } else {
        // TODO: handle invalid response
      }

    } catch (e) {
      // when developing locally, we will always enter this block due to 401 unauthorized response (Access-Control-Allow-Origin header)
      console.log(e);
      const property = await getMockProperty(propertyId);
      dispatch({ type: GET_PROPERTY, payload: property });
    }
  }
}
