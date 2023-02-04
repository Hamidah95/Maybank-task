import React from 'react';
import {
  ScrollView,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {GoogleAutoComplete} from 'react-native-google-autocomplete';
import {GOOGLE_PLACES_API} from '@env';

export default function MySearch() {
  return (
    <SafeAreaView>
      <GoogleAutoComplete apiKey={GOOGLE_PLACES_API} debounce={300}>
        {({inputValue, handleTextChange, locationResults, fetchDetails}) => {
          return (
            <React.Fragment>
              <TextInput
                style={{
                  height: 40,
                  width: 300,
                  borderWidth: 1,
                  paddingHorizontal: 16,
                }}
                value={inputValue}
                onChangeText={handleTextChange}
                placeholder="Location..."
              />
              <ScrollView style={{maxHeight: 100}}>
                {locationResults.map((el, i) => {
                  console.log('EL ', el);
                  //   <LocationItem
                  //     {...el}
                  //     fetchDetails={fetchDetails}
                  //     key={String(i)}
                  //   />
                  return (
                    <TouchableOpacity>
                      <Text>{el.description}</Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </React.Fragment>
          );
        }}
      </GoogleAutoComplete>
    </SafeAreaView>
  );
}
