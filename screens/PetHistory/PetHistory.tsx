import React, { useState, useEffect } from 'react';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import {
  SafeAreaView, Text, ScrollView, View,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import FabButton, { FabButtonIcon } from '../../components/FabButton/FabButton';
import colors from '../../styles/colors';
import styles from './styles';
import { PetOptions } from '../../utils/Constants';
import { IReduxState } from '../../stores/store';
import { addFoodLogRegistry, IFoodLogRegistry } from '../../stores/slices/global.slice';

const cachorro = require('../../assets/cachorroPiscando.jpeg');
const gato = require('../../assets/gatoPiscando.jpeg');

export default function PetHistory() {
  const petOption = useSelector((state: IReduxState) => state.global.petOption);
  const foodHistory = useSelector((state: IReduxState) => state.global.foodLogRegistry);
  const dispatch = useDispatch();

  const getPetImage = (pet: PetOptions) => (pet === PetOptions.Dog ? cachorro : gato);

  const RenderItem = ({ item }) => (
    <View style={styles.lastFoodContainer}>
      <Animated.Image style={styles.lastFoodPetImage} source={getPetImage(item.petImage)} />
      <View style={styles.lastFoodInfo}>
        <Text style={styles.lastFoodInfoText}>
          {item.id}
          {' '}
          -
          {' '}
          {item.date}
        </Text>
      </View>
    </View>
  );

  const addLog = () => {
    const log: IFoodLogRegistry = {
      id: foodHistory.length + 1,
      petImage: petOption,
      date: (new Date()).toDateString(),
    };
    dispatch(addFoodLogRegistry(log));
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={[styles.textContainer, styles.containerPadding]}>
        <Text style={[styles.title, colors.textOrange]}>Última vez que</Text>
        <Text style={styles.title}>coloquei comida</Text>
        <Text style={styles.paragraph}>recentemente:</Text>
        <View style={styles.lastFoodContainer}>
          <Animated.Image style={styles.lastFoodPetImage} source={getPetImage(petOption)} />
          <View style={styles.lastFoodInfo}>
            <Text style={styles.lastFoodInfoText}>10/10/2021 19h</Text>
          </View>
        </View>

        <View style={styles.separator} />

        <View style={styles.foodHistoryContainer}>
          <Text style={styles.paragraph}>
            Outras vezes que você colocou comida pra ele
          </Text>
          <FlatList
            style={{ paddingBottom: 20 }}
            data={foodHistory}
            renderItem={RenderItem}
            keyExtractor={(item, index) => `${item.id}${(new Date()).getTime()}`}
          />
        </View>
      </View>

      <FabButton iconName={FabButtonIcon.Vasilha} onPress={() => addLog()} />
    </SafeAreaView>
  );
}
