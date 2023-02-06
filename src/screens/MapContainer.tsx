import React, {useState, useEffect} from 'react'
import {View, SafeAreaView} from 'react-native'
import MapInput from '../components/MapInput'
import ShowMapView from '../components/ShowMapView'
import Geolocation from '@react-native-community/geolocation';
import { Region, Location } from '../utils/types';
import { connect } from 'react-redux';
import { getAllSearches } from '../utils/api';

const MapContainer = () => {
    const [region, setRegion] = useState<Region|null>(null)

    const onMapRegionChange = (region:Region) =>{setRegion(region)}
    const updateState = (location:Region) => {
        setRegion({
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003,
        })
    }
    const getCoordsFromName = (loc:Location) =>{
        updateState({
            latitude:loc.lat,
            longitude: loc.lng
        })
    }
    function getInitialState(){
        Geolocation.getCurrentPosition(info => {
            updateState({
              latitude: info.coords.latitude,
              longitude: info.coords.longitude,
            });
          });
    }

    useEffect(()=>{
        getInitialState()
    },[])
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:0.4, marginTop:10}}>
                <MapInput notifyChange={(loc:Location)=>getCoordsFromName(loc)}
                />
            </View>
            {
                region ?
                <View style={{flex:1}}>
                    <ShowMapView
                        region={region}
                        onRegionChange={(reg)=>onMapRegionChange(reg)}/>
                </View>:null
            }
        </SafeAreaView>
    )
}
const mapStateToProps = state => {
  return {
    searches: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllSearches: () => {
      dispatch(getAllSearches());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);