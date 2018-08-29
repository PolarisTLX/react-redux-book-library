import { GET_BOOKS, ADD_BOOK, UPDATE_BOOK, DELETE_BOOK, BOOKS_LOADING, CLEAR_USER_BOOKS } from '../actions/types';

const initialState = {
  books: [],
  loading: false
};


export default function(state = initialState, action) {
  switch(action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload,
        loading: false
      };
    case ADD_BOOK:
      return {
        ...state,
        books: [action.payload, ...state.books]
      };
    case UPDATE_BOOK:
      const updatedBooks = state.books.map(book => {
        if (book._id === undefined) {
          if(book.id === action.payload.id){
            return { ...book, ...action.payload}
          }
        } else {
          if(book._id === action.payload._id){
            return { ...book, ...action.payload}
          }
        }
        return book;
      });
      return {
        books: updatedBooks
      };
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter(book => (book._id !== action.payload && book.id !== action.payload))
      };
    case BOOKS_LOADING:
      return {
        ...state,
        loading: true
      };
    case CLEAR_USER_BOOKS:
      return {
        ...state,
        books: [],
        loading: false
      };
    default:
      return state;
  }
}
