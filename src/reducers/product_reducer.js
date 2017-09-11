import {FETCH_PRODUCTS} from '../actions/types'

export default function(state={}, action){
  switch(action.type){
    case FETCH_PRODUCTS:
      return {...state, product: action.payload}
  }
  return state
}
