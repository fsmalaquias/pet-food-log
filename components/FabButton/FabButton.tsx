import React from 'react';
import { Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styles from './styles';

const pata = require('../../assets/pata.png');
const vasilha = require('../../assets/vasilha.png');

export enum FabButtonIcon {
  Pata = 'pata',
  Vasilha = 'vasilha'
}

export default function FabButton(props: TouchableOpacityProps | any) {
  const { iconName } = props;
  const getIcon = (iconName: FabButtonIcon) => {
    switch (iconName) {
      case FabButtonIcon.Pata: return pata;
      case FabButtonIcon.Vasilha: return vasilha;
      default: return null;
    }
  };
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <TouchableOpacity style={styles.fabButton} {...props}>
      <Image style={styles.fabImage} source={getIcon(iconName)} />
    </TouchableOpacity>
  );
}
