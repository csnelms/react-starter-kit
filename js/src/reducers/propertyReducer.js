import { GET_PROPERTY, GET_SOLICIT_QUEUE } from '../constants/actionTypes'

const initialState = {}

export default function propertyReducer (state = initialState, action) {
  switch (action.type) {
    case GET_PROPERTY:
      const property = action.payload
      return Object.assign({}, state, property)
    case GET_SOLICIT_QUEUE:
      const queue = action.payload
      return Object.assign({}, state, {queue})
    default:
      return state
  }
}
