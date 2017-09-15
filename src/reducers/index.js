import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form'
import authReducer from './auth_reducer'
import messageReducer from './message_reducer'
import productReducer from './product_reducer'


const rootReducer = combineReducers({
  form,
  auth: authReducer,
  message: messageReducer,
  product: productReducer
});

export default rootReducer;
