import React from 'react';
// import Animated, {
//   useSharedValue,
//   withTiming,
//   useAnimatedStyle,
//   Easing,
// } from 'react-native-reanimated';
import {
  SafeAreaView, Text, View, ListRenderItemInfo,
} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import FabButton, { FabButtonIcon } from '../../components/FabButton/FabButton';
import colors from '../../styles/colors';
import styles from './styles';
import { IReduxState } from '../../stores/store';
import { addFoodLogRegistry, IFoodLogRegistry, removeFoodLogRegistry, setFirstOpen } from '../../stores/slices/global.slice';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import PetIcon from '../../components/PetIcon/PetIcon';
import { dateFormat } from '../../utils/Constants';

export default function PetHistory() {
  const petOption = useSelector((state: IReduxState) => state.global.petOption);
  const foodHistory = useSelector((state: IReduxState) => state.global.foodLogRegistry);
  const dispatch = useDispatch();

  const RenderItem = ({ item } : ListRenderItemInfo<IFoodLogRegistry>) => (
    <View style={styles.historyItem}>
      <PetIcon petOption={petOption} style={styles.lastFoodPetImage} />
      <View style={styles.lastFoodInfo}>
        <Text style={styles.lastFoodInfoText}>
          { dateFormat(item.date) }
        </Text>
      </View>
      <TouchableOpacity onPress={() => { dispatch(removeFoodLogRegistry(item)); }}>
        <FontAwesome style={styles.removeIcon} name="remove" size={30} color="red" />
      </TouchableOpacity>
    </View>
  );

  const addLog = () => {
    const log: IFoodLogRegistry = {
      id: foodHistory.length + 1,
      petOption,
      date: (new Date()).getTime(),
    };
    dispatch(addFoodLogRegistry(log));
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <LogoutButton onPress={() => { dispatch(setFirstOpen(true)); }} />
      <View style={[styles.textContainer, styles.containerPadding]}>
        <Text style={[styles.title, colors.textOrange]}>Última vez que</Text>
        <Text style={styles.title}>coloquei comida</Text>
        <Text style={styles.paragraph}>recentemente:</Text>
        {foodHistory.length > 0 ? (
          <View style={styles.lastFoodContainer}>
            <PetIcon petOption={petOption} style={styles.lastFoodPetImage} />
            <View style={styles.lastFoodInfo}>
              <Text style={styles.lastFoodInfoText}>
                {dateFormat(foodHistory[foodHistory.length - 1].date)}
              </Text>
            </View>
          </View>
        )
          : (<></>)}

        <View style={styles.separator} />

        <View style={styles.foodHistoryContainer}>
          {
            foodHistory.length === 0 ? (
              <Text style={styles.paragraph}>
                Você ainda não registrou que alimentou seu pet
              </Text>
            )
              : (
                <>
                  <Text style={styles.paragraph}>
                    Outras vezes que você colocou comida pra ele
                  </Text>
                  <FlatList
                    style={{ paddingBottom: 20 }}
                    data={foodHistory}
                    renderItem={RenderItem}
                    keyExtractor={(item) => `${item.id}${(new Date()).getTime()}`}
                  />
                </>
              )
        }
        </View>
      </View>
      <View style={styles.footer} />
      <FabButton iconName={FabButtonIcon.Vasilha} onPress={() => addLog()} />
    </SafeAreaView>
  );
}
