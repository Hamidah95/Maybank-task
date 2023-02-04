import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_PLACES_API} from '@env';
import {Button, StyleSheet, Text, View} from 'react-native';

export type Props = {
  name?: string;
  baseEnthusiasmLevel?: number;
};

const SearchBox: React.FC<Props> = ({name, baseEnthusiasmLevel = 0}) => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Type a place"
        onPress={(data, details = null) => console.log(details)}
        query={{key: GOOGLE_PLACES_API}}
        fetchDetails={true}
        onFail={error => console.log(error)}
        onNotFound={() => console.log('no results')}
        listEmptyComponent={() => (
          <View style={{flex: 1}}>
            <Text>No results were found</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 0.7,
    flexGrow: 1,
    height:'100%',
    marginHorizontal: 20,
  },
});

export default SearchBox;
