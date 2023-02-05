import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

interface Props {
  icon: string;
  onPressButton?: () => void;
}

export const ButtonIcon: React.FC<Props> = (
  props: Props,
): React.ReactElement => (
  <View style={{justifyContent: 'center'}}>
    <Icon
      name={props.icon}
      size={20}
      color="white"
      onPress={props.onPressButton}
    />
  </View>
);
