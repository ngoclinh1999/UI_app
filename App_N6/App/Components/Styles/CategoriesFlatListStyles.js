import { Dimensions,StyleSheet } from 'react-native'

const HeightScreen = Dimensions.get('window').height
export default StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    marginBottom: 3
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 10,
    backgroundColor: '#F7F7F7',
    height: HeightScreen*0.05,
    justifyContent: 'center',
  }
})
