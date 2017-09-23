import axios from 'axios'
import {browserHistory} from 'react-router'
import {
  AUTH_USER,UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  FETCH_PRODUCTS,
  GET_PRICE,
  ADD_PRICE
} from './types'
import history from '../history'

const ROOT_URL = 'http://localhost:4741'

export function signinUser ({email, password}){
  return function(dispatch){
    axios.post(`${ROOT_URL}/sign-in`, {email, password})
      .then(response => {
        dispatch({type: AUTH_USER})
        localStorage.setItem('token', response.data.token)
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

export function fetchAllProducts(){
  return function(dispatch){
    axios.get(`${ROOT_URL}/products`, {
      headers: {authorization: localStorage.getItem('token')}
    })
    .then(response => {
      dispatch({
        type: FETCH_PRODUCTS,
        payload: response.data.products
      })
    } )
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
