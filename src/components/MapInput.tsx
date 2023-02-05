import React, {useRef} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {GooglePlacesAutocomplete, GooglePlacesAutocompleteRef} from 'react-native-google-places-autocomplete';
import {GOOGLE_PLACES_API} from '@env';
import { PREDEFINE_PLACES } from '../utils/constants';
import { ButtonIcon } from './ButtonIcon';
import { connect } from 'react-redux';
import { getAllSearches } from '../utils/api';

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
  const mapRef = useRef<GooglePlacesAutocompleteRef>(null)

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
        <ButtonIcon icon='search1'/>
      )}
      renderRightButton={() => (
        <ButtonIcon icon='close' onPressButton={() => mapRef.current?.clear()}/>
      )}
      textInputProps={{multiline: true, numberOfLines: 4}}
      predefinedPlaces={PREDEFINE_PLACES}
      predefinedPlacesAlwaysVisible={false}
      ref={mapRef}
    />
  );
};
const mapStateToProps = state => {
  return {
    searches: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapInput);

const styles = StyleSheet.create({
  textInputContainer: {
    paddingRight:20,
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
