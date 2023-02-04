import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import ShowMap from '../components/ShowMap';
import SearchModal from '../components/SearchModal';
import {enableLatestRenderer} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {useLocation} from '../utils/locationContext';

function MapScreen(): JSX.Element {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [location, setLocation] = useState({
    latitude: 6.4545,
    longitude: 101.693207,
  });

  useEffect(() => {
    enableLatestRenderer();
    Geolocation.getCurrentPosition(info => {
      setLocation({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
      });
    });
  }, [location]);
  // Geolocation.setRNConfiguration(
  //   {
  //     // skipPermissionRequests: boolean;
  //     authorizationLevel:'auto'
  //     locationProvider:'auto'
  //   }
  // )

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>Map Screen</Text>
      <Icon
        name="search1"
        size={30}
        color="green"
        onPress={() => setShowModal(true)}
      />
      <ShowMap />
      {/* <Button title="HEllo" /> */}
      <SearchModal
        visible={showModal}
        onHideModal={() => setShowModal(false)}
      />
    </SafeAreaView>
  );
}

export default MapScreen;
