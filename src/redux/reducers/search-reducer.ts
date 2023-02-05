// determining changes of states in our application
import {
  SET_LOADING,
  GET_SEARCHES,
  SET_SEARCH_TITLE,
  CREATE_SEARCH,
  DELETE_SEARCH,
  CLEAR_SEARCH_TITLE,
} from '../actions/search-action';

// Define your state here
const initialState = {
  loading: false,
  searches: [],
  title: '',
};

// This export default will control your state for your application
export default (state = initialState, {type, payload}) => {
  switch (type) {
    // Set loading
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    // Get todos
    case GET_SEARCHES:
      return {
        ...state,
        todos: payload,
        loading: false,
      };
    // Set todo title from user that gonna input a title in form
    case SET_SEARCH_TITLE:
      return {
        ...state,
        title: payload,
      };
    // Create new todo
    case CREATE_SEARCH:
      return {
        ...state,
        searches: [payload, ...state.searches],
        loading: false,
      };
    // Clear todo title in form after creating a new one
    case CLEAR_SEARCH_TITLE:
      return {
        ...state,
        title: '',
      };
    // Delete existed todo
    case DELETE_SEARCH:
      return {
        ...state,
        todos: state.searches.filter(item => item.id !== payload),
        loading: false,
      };
    // Return default state if you didn't match any case
    default:
      return state;
  }
};
