import axios from 'axios';
import { GET_BOOKS, ADD_BOOK, UPDATE_BOOK, DELETE_BOOK, BOOKS_LOADING, CLEAR_USER_BOOKS } from './types';

export const getBooks = (user_id) => dispatch => {
  dispatch(setBooksLoading());
  axios
    .get('/api/books', {
      params: {
        user_id: user_id
      }
    })
    .then(res =>
      dispatch({
        type: GET_BOOKS,
        payload: res.data
      })
    )
};

export const addBook = book => dispatch => {
  axios
    .post('/api/books', book)
    .then(res =>
      dispatch({
        type: ADD_BOOK,
        payload: res.data
      })
    )
};

export const updateBook = book => dispatch => {
  axios
    .put(`/api/books/${book._id}`, book)
    .then(res =>
      dispatch({
        type: UPDATE_BOOK,
        payload: res.data
      })
    )
};

export const deleteBook = id => dispatch => {
  axios
    .delete(`/api/books/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_BOOK,
        payload: id
      })
    )
};

export const setBooksLoading = () => {
  return {
    type: BOOKS_LOADING
  };
};

export const clearBooks = () => {
  return {
    type: CLEAR_USER_BOOKS
  };
};
