import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import filterReducer from './filterReducer';
import authReducer from './authReducer'
import errorReducer from './errorReducer'

export default combineReducers({
  library: bookReducer,
  filter: filterReducer,
  auth: authReducer,
  errors: errorReducer
});
