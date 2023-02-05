/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import MapContainer from './src/screens/MapContainer';
import { Provider } from 'react-redux'//bridge for connecting react to redux
import store from './src/redux/store'

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <MapContainer/>
    </Provider>
  );
}

export default App;
