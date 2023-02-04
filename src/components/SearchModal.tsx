import React, {useState} from 'react';
import {Modal, StyleSheet, Text, Dimensions, SafeAreaView} from 'react-native';
import SearchBox from './SearchBox';
import Icon from 'react-native-vector-icons/AntDesign';
import {LocationProvider} from '../utils/locationContext';

const {height} = Dimensions.get('window');

export type Props = {
  visible: boolean;
  onHideModal?: () => void;
};

const SearchModal: React.FC<Props> = ({visible = false, onHideModal}) => {
  return (
    <Modal
      style={styles.container}
      visible={visible}
      onRequestClose={onHideModal}>
      <SafeAreaView style={{height}}>
        <Icon
          name="closecircle"
          size={30}
          color="green"
          onPress={onHideModal}
        />
        <SearchBox />
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default SearchModal;
