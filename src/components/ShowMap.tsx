import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

export type Props = {
  pin?: {latitude:number, longitude:number};
  baseEnthusiasmLevel?: number;
};

const ShowMap: React.FC<Props> = ({pin={latitude:6.4545, longitude:101.693207}, baseEnthusiasmLevel = 0}) => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        scrollEnabled={true}
        rotateEnabled={true}
        style={StyleSheet.absoluteFillObject}
      >
        <Marker coordinate={pin}/>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ShowMap;
