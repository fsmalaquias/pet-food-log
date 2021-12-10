import React, { useEffect, useState } from 'react';
import { NavigationProp, RouteProp, useNavigation } from '@react-navigation/core';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import {
  SafeAreaView, Text, TouchableOpacity, View,
} from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../../styles/colors';
import styles from './styles';
import { PetOptions, RouteNames } from '../../utils/Constants';
import { IReduxState } from '../../stores/store';
import { setPetOption } from '../../stores/slices/global.slice';

const cachorro = require('../../assets/cachorroPiscando.jpeg');
const gato = require('../../assets/gatoPiscando.jpeg');

interface PetChooseSharedTransitionProps {
  navigation: NavigationProp<any>,
  route: RouteProp<any>
}

const PetChoose: React.FC<PetChooseSharedTransitionProps> = ({ navigation, route }) => {
  const dispatch = useDispatch();
  // const [selectedPet, setSelectedPet] = useState<PetOptions>(PetOptions.none);
  const [fadeAnimDog] = useState(useSharedValue(1));
  const [fadeAnimCat] = useState(useSharedValue(1));
  const [fadeBorderDog] = useState(useSharedValue(0));
  const [fadeBorderCat] = useState(useSharedValue(0));

  const animationConfig: Animated.WithTimingConfig = {
    duration: 1000,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const animDogStyle = useAnimatedStyle(
    () => ({
      opacity: withTiming(fadeAnimDog.value, animationConfig),
    }),
    [],
  );

  const animCatStyle = useAnimatedStyle(
    () => ({
      opacity: withTiming(fadeAnimCat.value, animationConfig),
    }),
    [],
  );

  /**
    // const borderColorInterpolation = (value: number) => (Animated.interpolateColor(
    //   value,
    //   [0, 1],
    //   ['#ffffff', colors.textOrange.color],
    // ));

    // borderColor: withTiming(borderColorInterpolation(fadeBorderCat.value), animationConfig),
   */

  const handleSelectionAnimation = (option: PetOptions) => {
    console.log('handleSelectionAnimation', option);
    if (option === PetOptions.Cat) {
      // Activate Cat
      console.log('activateCat');
      activateCat(true);
      activateDog(false);
    } else if (option === PetOptions.Dog) {
      // Deactivate Cat
      console.log('activateDog');
      activateDog(true);
      activateCat(false);
    }
  };

  const activateCat = (activate: boolean) => {
    fadeAnimCat.value = activate ? 1 : 0.3;
    fadeBorderCat.value = activate ? 1 : 0;
  };

  const activateDog = (activate: boolean) => {
    fadeAnimDog.value = activate ? 1 : 0.3;
    fadeBorderDog.value = activate ? 1 : 0;
  };

  const goToPetInfo = (selectedOption: PetOptions) => {
    dispatch(setPetOption(selectedOption));
    if (selectedOption !== PetOptions.none) {
      console.log('goToPetInfo.navigation');
      navigation.navigate(RouteNames.PetInfo);
    }
  };

  const resetState = () => {
    dispatch(setPetOption(PetOptions.none));
    activateCat(true);
    activateDog(true);
  };

  useEffect(() => {
    const onLoadPage = navigation.addListener('focus', () => {
      resetState();
    });
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={[styles.textContainer, styles.containerPadding]}>
        <Text style={[styles.title, colors.textOrange]}>Qual é o</Text>
        <Text style={styles.title}>seu pet?</Text>
      </View>
      <View style={styles.petChooser}>
        <TouchableOpacity
          style={styles.petsContainer}
          onPress={() => { goToPetInfo(PetOptions.Cat); }}
        >
          <SharedElement id="petImage">
            <Animated.Image style={[styles.petImage]} source={gato} />
          </SharedElement>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.petsContainer}
          onPress={() => { goToPetInfo(PetOptions.Dog); }}
        >
          <Animated.Image style={[styles.petImage]} source={cachorro} />
        </TouchableOpacity>
      </View>

      <View style={[styles.textContainer, styles.containerPadding]} />
    </SafeAreaView>
  );
};

export default PetChoose;
