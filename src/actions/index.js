import axios from 'axios'
import {browserHistory} from 'react-router'
import {
  AUTH_USER,UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  FETCH_PRODUCTS,
  GET_PRICE,
  ADD_PRICE,
  SAVE_PRICE,
  MY_MOVIES,
  REMOVE_PRICE
} from './types'
import history from '../history'

const ROOT_URL = 'http://localhost:4741'

export function signinUser ({email, password}){
  return function(dispatch){
    axios.post(`${ROOT_URL}/sign-in`, {email, password})
      .then(response => {
        dispatch({type: AUTH_USER})
        localStorage.setItem('token', response.data.user.token)
        localStorage.setItem('userId', response.data.user.id)
        history.push('/main')
      })
      .catch(()=>{
        dispatch(authError('Bad Login Info'))
      })
  }
}

export function signUpUser({email, password}){
  return function(dispatch){
    axios.post(`${ROOT_URL}/sign-up`, {email, password})
    .then(response =>{
      dispatch({type: AUTH_USER})
      localStorage.setItem('token', response.data.token)
      history.push('/main')
    })
    //originil is without name on it
    .catch(error => dispatch(authError(error.response.data.error.name)))
    // .catch(error => console.log(error))
  }
}
export function authError(error){
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser(){
  localStorage.removeItem('token')
  return {type: UNAUTH_USER}
}

export function fetchMessage(){
  return function(dispatch){
    axios.get(ROOT_URL, {
      headers: {authorization: localStorage.getItem('token')}
    })
    .then(response => {
      dispatch({
        type: FETCH_MESSAGE,
        payload: response.data.message
      })
    })
  }
}

// export function fetchAllProducts(){
//   return function(dispatch){
//     axios.get(`${ROOT_URL}/products`, {
//       headers: {authorization: localStorage.getItem('token')}
//     })
//     .then(response => {
//       dispatch({
//         type: FETCH_PRODUCTS,
//         payload: response.data.products
//       })
//     } )
//   }
// }

export function fetchAllProducts(){
  return function(dispatch){
    axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=cb019ff660d65f8b659b56ecef703166&language=en-US&page=1")
      .then(response => {
        dispatch({
          type: FETCH_PRODUCTS,
          payload: response.data.results
        })
      })
      // .then(response => {
      //   response.data.results.forEach(x =>{
      //     console.log(x.poster_path)
      //   })
      // })
  }
}

//order
export function getTotalPrice(price){
  return {
    type: GET_PRICE,
    payload: price
  }
}

export function addPrice(price){
  return {
    type: ADD_PRICE,
    payload: price
  }
}

export function saveMovies(list){
  return function(dispatch){
    axios.post(`${ROOT_URL}/lists`, {list, user:localStorage.getItem('userId')})
      .then(response => {
        dispatch({
          type: REMOVE_PRICE,
          payload: {}
        })
      })
    // .then(response => {
    //   if(response.status == 204){
    //     axios.get(`${ROOT_URL}/lists`, {params:{ID:localStorage.getItem('userId')}})
    //     .then(response => {
    //       dispatch({
    //         type: MY_MOVIES,
    //         payload: response.data.lists
    //       })
    //     })
    //   }
    // })
  }
}

export function getMovies(){
  return function(dispatch){
    axios.get(`${ROOT_URL}/lists`, {params:{ID:localStorage.getItem('userId')}})
    .then(response => {
      dispatch({
        type: MY_MOVIES,
        payload: response.data.lists
      })
    })
  }
}

export function deleteMovie(id){
  return function(dispatch){
    axios.delete(`${ROOT_URL}/lists`, {params:{ID: id}})
    .then(response => {
      if(response.status == 204){
        axios.get(`${ROOT_URL}/lists`, {params:{ID:localStorage.getItem('userId')}})
        .then(response => {
          dispatch({
            type: MY_MOVIES,
            payload: response.data.lists
          })
        })
      }
    })
  }
}
