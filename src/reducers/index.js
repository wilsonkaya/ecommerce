import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form'
import authReducer from './auth_reducer'
import messageReducer from './message_reducer'
import productReducer from './product_reducer'
import priceReducer from './order_reducer'
import mymovies from './my_movies_reducer'


const rootReducer = combineReducers({
  form,
  auth: authReducer,
  message: messageReducer,
  product: productReducer,
  price: priceReducer,
  movies: mymovies

});

export default rootReducer;
