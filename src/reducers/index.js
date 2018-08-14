import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  library: bookReducer,
  filter: filterReducer
});
