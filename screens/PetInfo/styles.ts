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
    backgroundColor: 'grey',
    flex: 1,
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
    height: '30%',
    width: '100%',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#E97F01',
    marginVertical: 25,
  },
  textContainer: {
    flex: 1,
    flexShrink: 3,
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
  inputText: {
    marginVertical: 10,
    height: 42,
    fontSize: 18,
    backgroundColor: '#EEEEEE',
    borderRadius: 33,
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: '#000000',
  },
});
