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
    case GET_SEARCHES:
      return {
        ...state,
        searches: payload,
        loading: false,
      };
    case SET_SEARCH_TITLE:
      return {
        ...state,
        title: payload,
      };
    case CREATE_SEARCH:
      return {
        ...state,
        searches: [payload, ...state.searches],
        loading: false,
      };
    case CLEAR_SEARCH_TITLE:
      return {
        ...state,
        title: '',
      };
    case DELETE_SEARCH:
      return {
        ...state,
        searches: state.searches.filter(item => item.id !== payload),
        loading: false,
      };
    // Return default state if you didn't match any case
    default:
      return state;
  }
};
