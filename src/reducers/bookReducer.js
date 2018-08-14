import uuid from 'uuid';
import { GET_BOOKS, ADD_BOOK, UPDATE_BOOK, DELETE_BOOK } from '../actions/types';

const initialState = {
  books: [
    { id: uuid(), name: 'Lord of The Rings', author: 'Author Name', category: 'Action'},
    { id: uuid(), name: 'Harry Potter: And the Half Blood Prince', author: 'Author Name', category: 'Kids'},
    { id: uuid(), name: 'To Kill A Mockingbird', author: 'Author Name', category: 'History'},
    { id: uuid(), name: 'The Three Body Problem', author: 'Author Name', category: 'Sci-Fi'},
    { id: uuid(), name: 'War and Peace', author: 'Author Name', category: 'Learning'}
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
    case UPDATE_BOOK:
      const updatedBooks = state.books.map(book => {
        if(book.id === action.payload.id){
          return { ...book, ...action.payload}
        }
        return book
      })
      return { books: updatedBooks }
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload)
      };
    default:
      return state;
  }
}
