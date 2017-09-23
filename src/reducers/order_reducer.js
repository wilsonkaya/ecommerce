import {GET_PRICE, ADD_PRICE} from '../actions/types'

export default function (state = [], action) {
  switch(action.type){
    case GET_PRICE:
      return action.payload
    case ADD_PRICE:
    // const price = action.payload
    // const newState = {...state}
    // newState[price.id] = price
    // return newState
    return {...state, [action.payload.id]: action.payload }
  }
  return state
}
