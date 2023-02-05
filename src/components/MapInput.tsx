import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_PLACES_API} from '@env';
import Icon from 'react-native-vector-icons/AntDesign';
import { PREDEFINE_PLACES } from '../utils/constants';

function renderDescription(rowData) {
  const title = rowData.structured_formatting?.main_text;
  const descp = rowData.description
  const address = rowData.structured_formatting?.secondary_text?? descp;

  return (
    <View>
      <Text style={{color:'black'}}>{title}</Text>
      <Text numberOfLines={2} style={{flex:1}}>{address}</Text>
    </View>
  );
}

interface Props {
  notifyChange: (res:any) => void
}

const MapInput: React.FC<Props> = props => {

  return (
    <GooglePlacesAutocomplete
      placeholder="Search anywhere"
      enablePoweredByContainer={false}
      minLength={2}
      listViewDisplayed={false}
      fetchDetails={true}
      listEmptyComponent={() => (
        <View style={{flex: 1}}>
          <Text>No results were found</Text>
        </View>
      )}
      onPress={(data, details = null) => {
        props.notifyChange(details?.geometry.location);
      }}
      query={{
        key: GOOGLE_PLACES_API,
        language: 'en',
      }}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={200}
      listUnderlayColor="yellow"
      renderRow={rowData => {
        return <View style={{flex:1, marginRight:5
        }}>{renderDescription(rowData)}</View>;
      }}
      // textInputHide
      styles={styles}
      renderLeftButton={() => (
        <View style={{justifyContent: 'center'}}>
          <Icon
            name="search1"
            size={20}
            color="white"
          />
        </View>
      )}
      renderRightButton={() => (
        <View style={{justifyContent: 'center'}}>
          <Icon
            name="close"
            size={20}
            color="white"
            onPress={() => console.log('clear text input')}
          />
        </View>
      )}
      textInputProps={{multiline: true, numberOfLines: 4}}
      predefinedPlaces={PREDEFINE_PLACES}
      predefinedPlacesAlwaysVisible={false}
    />
  );
};
export default MapInput;

const styles = StyleSheet.create({
  textInputContainer: {
    backgroundColor: 'grey',
  },
  textInput: {
    maxHeight: 100,
    color: '#5d5d5d',
    fontSize: 16,
    flex: 1,
    flexWrap: 'wrap',
  },
  predefinedPlacesDescription: {
    color: '#1faadb',
  },
  loader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 20,
  },
})
