import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  Text
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Icon from 'react-native-vector-icons/AntDesign';

function MapScreen(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
  
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
  
    return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Text>Map Screen</Text>
          <Icon name="infocirlce" size={30} color="green" />
        </ScrollView>
      </SafeAreaView>
    );
  }

  export default MapScreen