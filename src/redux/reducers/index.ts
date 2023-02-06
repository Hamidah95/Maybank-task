// combineReducers come from redux that used for combining reducers that we just made.
import { combineReducers } from 'redux'

// Reducers
import searches from './search-reducer'

export default combineReducers({
  searches,
  // Here you can registering another reducers.
})