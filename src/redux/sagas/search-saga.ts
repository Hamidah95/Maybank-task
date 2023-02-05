// last step for redux (combination)
// Import the redux-saga/effects
import {
    put,
    call,
    takeLatest,
    takeEvery
  } from 'redux-saga/effects'
  
  // Import all actions and api's
  import {
    SET_LOADING,
    GET_SEARCHES,
    GET_SEARCHES_REQUESTED,
    SET_SEARCH_TITLE,
    SET_SEARCH_TITLE_REQUESTED,
    CLEAR_SEARCH_TITLE,
    CREATE_SEARCH,
    CREATE_SEARCH_REQUESTED,
    DELETE_SEARCH,
    DELETE_SEARCH_REQUESTED
  } from '../actions/search-action'
  
  // Import all api's
  import {
    getAllSearches,
    createNewSearch,
    deleteExistedSearches
  } from '../../utils/api'
  
  // Here's the unique part, generator function*, function with asterisk(*)
  
  // Get Todos
  function* getSearches() {
    yield put({ type: SET_LOADING })
  
    const todos = yield call(getAllSearches)
  
    yield put({ type: GET_SEARCHES, payload: todos })
  }
  
  // Set the title of todo
  function* setSearchTitle({ payload }) {
    yield put({ type: SET_SEARCH_TITLE, payload })
  }
  
  // Create Todo
  function* createSearch({ payload }) {
    yield put({ type: SET_LOADING })
  
    const newTodo = yield call(createNewSearch, payload)
  
    yield put({ type: CREATE_SEARCH, payload: newTodo })

    yield put({ type: CLEAR_SEARCH_TITLE })
  }
  
  function* deleteSearch({ payload }) {
    yield put({ type: SET_LOADING })
  
    const todo = yield call(deleteExistedSearches, payload)
  
    yield put({ type: DELETE_SEARCH, payload: todo })
  }
  
  export default function* searchSaga() {
    yield takeEvery(GET_SEARCHES_REQUESTED, getSearches)
    yield takeEvery(SET_SEARCH_TITLE_REQUESTED, setSearchTitle)
    yield takeLatest(CREATE_SEARCH_REQUESTED, createSearch)
    yield takeEvery(DELETE_SEARCH_REQUESTED, deleteSearch)
  }