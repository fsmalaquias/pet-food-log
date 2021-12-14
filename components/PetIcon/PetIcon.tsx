import React from 'react';

import { FontAwesome5 } from '@expo/vector-icons';
import { PetOptions } from '../../utils/Constants';
import styles from '../../styles/colors';

interface IPetIcon{
  petOption: PetOptions;
}

export default function PetIcon(props: IPetIcon | any) {
  const { petOption } = props;
  const validateIcon = () => (petOption === PetOptions.none ? 'question' : petOption);
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FontAwesome5 name={validateIcon()} size={50} color={styles.textGray} {...props} />
  );
}
