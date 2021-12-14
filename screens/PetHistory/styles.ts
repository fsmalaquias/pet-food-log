import { StyleSheet } from 'react-native';

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
  },
  title: {
    fontSize: 25,
    lineHeight: 35.19,
    fontWeight: 'bold',
  },
  paragraph: {
    paddingVertical: 10,
    fontSize: 22,
    lineHeight: 23.58,
    color: '#838383',
  },
  lastFoodContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    paddingVertical: 10,
  },
  historyItem: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  lastFoodPetImage: {
    fontSize: 30,
  },
  lastFoodInfo: {
    paddingHorizontal: 10,
  },
  lastFoodInfoText: {
    fontSize: 18,
    lineHeight: 30,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#838383',
  },
  foodHistoryContainer: {
    maxHeight: '75%',
  },
  removeIcon: {
    alignSelf: 'flex-end',
  },
  footer: {
    height: 30,
    width: '100%',
  },
});
