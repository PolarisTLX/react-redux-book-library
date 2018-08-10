import uuid from 'uuid';
import { GET_BOOKS, ADD_BOOK, DELETE_BOOK } from '../actions/types';

const initialState = {
  books: [
    { id: uuid(), name: 'Lord of The Rings', author: 'Author Name', category: 'Fantasy'},
    { id: uuid(), name: 'Harry Potter: And the Half Blood Prince', author: 'Author Name', category: 'Children\'s Books'},
    { id: uuid(), name: 'To Kill A Mockingbird', author: 'Author Name', category: 'Historical Fiction'},
    { id: uuid(), name: 'The Three Body Problem', author: 'Author Name', category: 'Sci-fiction'},
    { id: uuid(), name: 'War and Peace', author: 'Author Name', category: 'Documentary'}
  ]
};


export default function(state = initialState, action) {
  switch(action.type) {
    case GET_BOOKS:
    return {
      ...state
    };
    case ADD_BOOK:
    return {
      ...state,
      books: [action.payload, ...state.books]
    };
    case DELETE_BOOK:
    return {
      ...state,
      books: state.books.filter(book => book.id !== action.payload)
    };
    default:
      return state;
  }
}
