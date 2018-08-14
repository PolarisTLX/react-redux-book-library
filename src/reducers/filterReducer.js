import { CHANGE_FILTER } from '../actions/types';

const initialState = {
  filter: ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]
};

export default function(state = initialState, action) {
  switch(action.type) {
    case CHANGE_FILTER:
      if (action.payload == 'All Categories') {
        return initialState;
      } else {
        return {
          filter: [action.payload]
        };
      }
    default:
      return state;
  }
}
