import {MY_MOVIES} from '../actions/types'

export default function(state={}, action){
  switch(action.type){
    case MY_MOVIES:
      return {...state, movies: action.payload}
  }
  return state
}
