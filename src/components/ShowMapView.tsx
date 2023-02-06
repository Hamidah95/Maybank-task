import React from 'react';
import {StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { Region } from '../utils/types';

interface Props {
  region: Region;
  onRegionChange: (region: Region) => void;
}

const ShowMapView: React.FC<Props> = props => {
  return (
    <MapView
      style={styles.container}
      region={props.region}
      showsUserLocation={true}
      onRegionChange={reg => props.onRegionChange(reg)}>
      <Marker coordinate={props.region} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ShowMapView;
