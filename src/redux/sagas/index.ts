import { spawn } from 'redux-saga/effects'

// Sagas
import searchSaga from './search-saga'

// Export the root saga
export default function* rootSaga() {
  console.log("Hello From Redux-Saga!")

  yield spawn(searchSaga)
}