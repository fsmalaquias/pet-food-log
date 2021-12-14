import React from 'react';
// import * as Animatable from 'react-native-animatable';
import Animated from 'react-native-reanimated';
import {
  SafeAreaView, Text, View,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
// import { SharedElement } from 'react-navigation-shared-element';
import { useDispatch, useSelector } from 'react-redux';
import FabButton, { FabButtonIcon } from '../../components/FabButton/FabButton';
import colors from '../../styles/colors';
import styles from './styles';
import { PetOptions } from '../../utils/Constants';
import { setFirstOpen, setPetName } from '../../stores/slices/global.slice';
import { IReduxState } from '../../stores/store';

const cachorro = require('../../assets/cachorroPiscando.jpeg');
const gato = require('../../assets/gatoPiscando.jpeg');

const PetInfo = () => {
  const petOption = useSelector((state: IReduxState) => state.global.petOption);
  const petName = useSelector((state: IReduxState) => state.global.petName);
  const dispatch = useDispatch();

  const getPetImage = (pet: PetOptions) => (pet === PetOptions.Dog ? cachorro : gato);

  const goToPetHistory = () => {
    dispatch(setFirstOpen(false));
    // nav.navigate(RouteNames.LoggedInScreen);
  };

  const handlePetName = (text: string) => {
    dispatch(setPetName(text));
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={[styles.textContainer, styles.containerPadding]}>
        <Text style={[styles.title, colors.textOrange]}>Como ele(a)</Text>
        <Text style={styles.title}>se chama?</Text>
        <Animated.Image style={[styles.petImage]} source={getPetImage(petOption)} />
        <TextInput value={petName} style={styles.inputText} placeholder="Nome do seu pet?" onChangeText={handlePetName} />
      </View>

      <FabButton onPress={goToPetHistory} iconName={FabButtonIcon.Pata} />
    </SafeAreaView>
  );
};

// PetInfo.sharedElements = (route: any) => {
//   const { item } = route.params;
//   console.log('Shared Element');
//   return [
//     {
//       id: 'petImage',
//       animation: 'move',
//       resize: 'clip',
//     },
//   ];
// };

export default PetInfo;
