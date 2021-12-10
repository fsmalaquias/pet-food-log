import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  containerPadding: {
    padding: 30,
  },
  mainContainer: {
    flex: 1,
  },
  petChooser: {
    flex: 6,
    padding: 30,
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  petsContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    padding: '2%',
  },
  petImage: {
    height: '100%',
    width: '100%',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#E97F01',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 48,
    lineHeight: 56.25,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 22,
    lineHeight: 23.58,
  },
});
