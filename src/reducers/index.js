import { combineReducers } from 'redux';
import bookReducer from './bookReducer';

export default combineReducers({
  book: bookReducer
});
