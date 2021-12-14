import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export default function LogoutButton(props: TouchableOpacityProps | any) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <TouchableOpacity style={styles.logoutButton} {...props}>
      <Ionicons name="exit-outline" size={30} color="black" />
    </TouchableOpacity>
  );
}
