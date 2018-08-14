import { GET_BOOKS, ADD_BOOK, UPDATE_BOOK, DELETE_BOOK } from './types';

export const getBooks = () => {
  return {
    type: GET_BOOKS
  };
};

export const addBook = book => {
  return {
    type: ADD_BOOK,
    payload: book
  };
};

export const updateBook = book => {
  return {
    type: UPDATE_BOOK,
    payload: book
  };
};

export const deleteBook = id => {
  return {
    type: DELETE_BOOK,
    payload: id
  };
};
