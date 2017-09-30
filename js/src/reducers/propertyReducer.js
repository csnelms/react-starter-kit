import {GET_PROPERTY} from '../constants/actionTypes'

const initialState = {}

export default function propertyReducer (state = initialState, action) {
  switch (action.type) {
    case GET_PROPERTY:
      const queue = action.payload // new Object()...
      return Object.assign({}, state, queue)
    default:
      return state
  }
}
