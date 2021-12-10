import React from 'react';
import {
  Image, SafeAreaView, Text, View,
} from 'react-native';
import FabButton from '../../components/FabButton/FabButton';
import colors from '../../styles/colors';
import styles from './styles';

const heroImage = require('../../assets/colocandoComida.jpeg');

export default function Home() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.heroImage} source={heroImage} />
      </View>
      <View style={[styles.textContainer, styles.containerPadding]}>
        <Text style={[styles.title, colors.textOrange]}>Hello</Text>
        <Text style={styles.title}>Humans</Text>
      </View>
      <View style={[styles.textContainer, styles.containerPadding]}>
        <Text style={[styles.paragraph, colors.textGray]}>
          You’ve decided to buy a puppy ?
          We help you find your new friend
        </Text>
      </View>
      <FabButton />
    </SafeAreaView>
  );
}
