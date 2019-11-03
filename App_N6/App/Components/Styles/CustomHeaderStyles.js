import {Dimensions, StyleSheet} from 'react-native';

const HeightScreen = Dimensions.get('window').height;
export default StyleSheet.create({
  header: {
    marginBottom: HeightScreen * 0.01,
    justifyContent: 'center',
    alignItems: 'center',
    height: HeightScreen * 0.12,
    backgroundColor: '#3b5998',
  },
  titleStyle: {
    fontSize: 22,
    color: '#fff',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: '#00000000',
  },
});
