import axios from 'axios';
import { GET_BOOKS, ADD_BOOK, UPDATE_BOOK, DELETE_BOOK, BOOKS_LOADING } from './types';

export const getBooks = () => dispatch => {
  // return {
  //   type: GET_BOOKS
  // };
  dispatch(setBooksLoading());
  axios
    .get('/api/books')
    // .get('/books')
    .then(res =>
      dispatch({
        type: GET_BOOKS,
        payload: res.data
      })
    )
};

export const addBook = book => dispatch => {
  // return {
  //   type: ADD_BOOK,
  //   payload: book
  // };
  axios
    .post('/api/books', book)
    // .post('/books', book)
    .then(res =>
      dispatch({
        type: ADD_BOOK,
        payload: res.data
      })
    )
};

export const updateBook = book => dispatch => {
  // return {
  //   type: UPDATE_BOOK,
  //   payload: book
  // };
  axios
    .put(`/api/books/${book._id}`, book)
    // .put(`/books/${book._id || book.id}`, book)
    .then(res =>
      dispatch({
        type: UPDATE_BOOK,
        payload: res.data
      })
    )
};

export const deleteBook = id => dispatch => {
  // return {
  //   type: DELETE_BOOK,
  //   payload: id
  // };
  axios
    .delete(`/api/books/${id}`)
    // .delete(`/books/${id}`)
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
